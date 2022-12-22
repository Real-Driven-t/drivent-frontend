import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDate';

export default function Locals() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const body = { day: date.toISOString() };
  const [activities, setActivities] = useState([]);
  const { getActivitiesByDay } = useActivitiesByDay(body);

  /*  useEffect(() => {
    getActivitiesByDay().then((res) => setActivities(res));
  }, [body]); */

  return <Wrapper> 'Carregando...' </Wrapper>;
}

const Wrapper = styled.div`
  margin-top: 60px;
`;
