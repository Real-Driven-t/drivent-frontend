import { useEffect, useState } from 'react';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDate';
import useDaysWithActivity from '../../hooks/api/useDaysWithActiviy';
import DayButton from './DayButton';
import DaysContainer from './DaysContainer';

export default function Locals() {
  //const body = { day: date.toISOString() };
  const [ selectedDay, setSelectedDay ] = useState('');
  const [activities, setActivities] = useState([]);
  const { getActivitiesByDay } = useActivitiesByDay();
  const { days } = useDaysWithActivity();
  console.log(selectedDay);
  console.log(days);
  useEffect(() => {

  }, [selectedDay]);

  return(
    <>
      {/*activities.length !== 0 ? <DayButton activities={activities} /> : <>Deu ruim...</>*/}
      {days ? <DaysContainer days={days} setSelectedDay={setSelectedDay}/> : ''}
    </>
  );
}
