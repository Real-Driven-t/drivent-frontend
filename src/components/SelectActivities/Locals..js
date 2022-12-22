import styled from 'styled-components';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDate';

export default function Locals(day) {
  const { activitiesByDay, activitiesByDayError, activitiesByDayLoading } = useActivitiesByDay(day);
  return <Wrapper>"Locais"</Wrapper>;
}

const Wrapper = styled.div`
  margin-top: 60px;
`;
