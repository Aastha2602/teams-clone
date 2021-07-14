import React, { useEffect, useState } from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject } from "@syncfusion/ej2-react-schedule";
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import db from '../../firebase'
import {useAuth} from '../../Contexts/AuthContext'
import {v1 as uuid } from 'uuid' 


function Scheduler() {
    
    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])

    const {currentUser} = useAuth()
    useEffect(() => {
        db.collection('users').get().then((docs)=>{
            docs.forEach((doc)=>{
                setUsers(prev=>[...prev,doc.data()])
            })
        })
        db.collection('events').get().then((docs)=>{
            docs.forEach((doc)=>{
                setEvents(prev=>[...prev,doc.data()])
            })
        })
    }, [])
    const onActionBegin = (args) =>{
        if (args.requestType === "eventCreate") {
            const meetingId = uuid();
            db.collection('events').doc(meetingId).set({
                MeetingId: meetingId,
                Subject: args.data[0].Subject?args.data[0].Subject:"",
                StartTime: args.data[0].StartTime? args.data[0].StartTime.toISOString(): new Date().toISOString(),
                EndTime: args.data[0].EndTime?args.data[0].EndTime.toISOString():new Date().toISOString(),
                Description: args.data[0].Description?args.data[0].Description:"",
                Creater: currentUser.displayName,
                CreaterId: currentUser.uid,
                Attendees: args.data[0].Attendees?args.data[0].Attendees:""
            })
            
        } else if (args.requestType === "eventChange") {
            db.collection('events').doc(args.data.MeetingId).update({
                Subject: args.data.Subject?args.data.Subject:"",
                StartTime: args.data.StartTime?args.data.StartTime.toISOString():new Date().toISOString(),
                EndTime: args.data.EndTime?args.data.EndTime.toISOString():new Date().toISOString(),
                Description: args.data.Description?args.data.Description:"",
                Attendees: args.data.Attendees?args.data.Attendees:""
            })
            
        } else if (args.requestType === "eventRemove") {
            db.collection('events').doc(args.data.MeetingId).delete()
        }
    }

    const editorTemplate=(props) =>{
        return (props !== undefined && Object.keys(props).length > 0 ? 
            <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}>
                <tbody>
                    <tr>
                        <td className="e-textlabel">Title</td><td colSpan={4}>
                            <input autoComplete="off" id="Subject" className="e-field e-input" type="text" name="Subject" placeholder="Subject" style={{ width: '100%' }}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="e-textlabel">Attendees</td><td colSpan={4}>
                            <MultiSelectComponent
                                className="e-field"
                                placeholder='Add attendees'
                                data-name="Attendees"
                                dataSource={users}
                                fields={{text:'name',value:'id'}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="e-textlabel">Start</td>
                        <td colSpan={4}>
                            <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field" />
                        </td>
                    </tr>
                    <tr>
                        <td className="e-textlabel">End</td>
                        <td colSpan={4}>
                            <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field" />
                        </td>
                    </tr>
                    <tr>
                        <td className="e-textlabel">Description</td><td colSpan={4}>
                            <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }} />
                        </td>
                    </tr>
                </tbody>
            </table> 
        : <div></div>);
    }
    return (
        <ScheduleComponent 
            height='93vh' 
            width='100vw' 
            selectedDate={new Date()} 
            actionBegin={onActionBegin}
            editorTemplate={editorTemplate}
            eventSettings={{dataSource:events}}
        >
        <Inject services={[Day, Week, WorkWeek, Month ]}/>
      </ScheduleComponent>
    )
}

export default Scheduler
