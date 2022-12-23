import { useEffect, useState } from 'react';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDate';
import useDaysWithActivity from '../../hooks/api/useDaysWithActiviy';
import Activities from './Activities';
import DaysContainer from './DaysContainer';

export default function Locals() {
  //const body = { day: date.toISOString() };
  const [ selectedDay, setSelectedDay ] = useState('');
  const [activities, setActivities] = useState([]);
  const { getActivitiestWithPlace } = useActivitiesByDay();
  const { days } = useDaysWithActivity();
  useEffect(() => {
    const promisse = getActivitiestWithPlace(selectedDay);
    promisse.then(p => { if(p) setActivities(p); });
  }, [selectedDay]);
  console.log(activities);
  return(
    <>
      {/*activities.length !== 0 ? <DayButton activities={activities} /> : <>Deu ruim...</>*/}
      {days ? <DaysContainer days={days} setSelectedDay={setSelectedDay} activities={activities}/> : ''}
    </>
  );
}
