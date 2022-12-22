import styled from 'styled-components';
import Day from './Day';

export default function DaysContainer({ days, setSelectedDay }) {
  return (
    <Container>
      {days.map(d => <Day day={d.day} setSelectedDay={setSelectedDay}/>)}
    </Container>
  );
}

const Container = styled.div`
    display: flex;
`;
