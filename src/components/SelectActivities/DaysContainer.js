import styled from 'styled-components';
import Day from './Day';
import Activities from './Activities';

export default function DaysContainer({ days, setSelectedDay, activities }) {
  return (
    <>
      <Container>
        {days.map((d, i) => (
          <Day key={i} day={d.day} setSelectedDay={setSelectedDay} />
        ))}
      </Container>
      {activities[0] ? <Activities activities={activities} /> : ''}
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
