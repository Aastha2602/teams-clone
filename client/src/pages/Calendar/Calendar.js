import React from 'react'
import Scheduler from '../../components/scheduler/Scheduler.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import './Calendar.scss';

function Calendar() {
    return (
        <div className="cal">
            <Sidebar />
            <Scheduler />
        </div>
    )
}

export default Calendar
