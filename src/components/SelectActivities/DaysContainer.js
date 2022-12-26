import styled from 'styled-components';
import Day from './Day';
import Activities from './Activities';
import { useState } from 'react';

export default function DaysContainer({ days, setSelectedDay, activities }) {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <Container>
        {days.map((d, i) => (
          <Day
            key={i}
            day={d.day}
            id={i}
            setSelectedDay={setSelectedDay}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </Container>

      {activities[0] ? <Activities activities={activities} /> : ''}
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
