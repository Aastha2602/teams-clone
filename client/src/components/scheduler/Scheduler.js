import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function Scheduler() {
    return (
        <ScheduleComponent height='100vh' width='100vw' selectedDate={new Date()} >
        {/*comments*/}
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
    )
    
}

export default Scheduler


