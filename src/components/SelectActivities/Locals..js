import { useEffect, useState } from 'react';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDate';
import useDaysWithActivity from '../../hooks/api/useDaysWithActiviy';
import DaysContainer from './DaysContainer';

export default function Locals() {
  const [selectedDay, setSelectedDay] = useState('');
  const [activities, setActivities] = useState([]);
  const { getActivitiestWithPlace } = useActivitiesByDay();
  const { days } = useDaysWithActivity();

  useEffect(() => {
    const promisse = getActivitiestWithPlace(selectedDay);
    promisse.then((p) => {
      if (p) setActivities(p);
    });
  }, [selectedDay]);

  return <>{days ? <DaysContainer days={days} setSelectedDay={setSelectedDay} activities={activities} /> : ''}</>;
}
