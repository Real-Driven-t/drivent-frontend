import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDate';
import useToken from '../../hooks/useToken';
import { getActivitiestWithPlace } from '../../services/activityApi';

export default function Locals() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const body = { day: date.toISOString() };
  const token = useToken();

  const [data, setData] = useState();

  useEffect(() => {
    console.log(token);

    getActivitiestWithPlace(body, token)
      .then((e) => setData(e.data))
      .catch((e) => setData(e.data));
  }, [token]);

  console.log(data);

  return <Wrapper> 'Carregando...' </Wrapper>;
}

const Wrapper = styled.div`
  margin-top: 60px;
`;
