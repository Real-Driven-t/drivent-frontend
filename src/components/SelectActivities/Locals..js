import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDate';
import DayButton from './DayButton';

export default function Locals() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const body = { day: date.toISOString() };
  const [activities, setActivities] = useState([]);
  const { getActivitiesByDay } = useActivitiesByDay();

  useEffect(() => {
    const promisse = getActivitiesByDay(body.day);
    promisse.then((p) => {
      if (p) setActivities(p);
    });
  }, []);

  return <>{activities.length !== 0 ? <DayButton activities={activities} /> : <>Deu ruim...</>}</>;
}
