import React from 'react'

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 md:mt-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData}}
        selectedDate={new Date (2023, 0, 10)}
      >
        <Inject services={[ Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop ]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar