import styled from 'styled-components';
import ActivityPlace from './ActivityPlace';

export default function Activities({ activities }) {
  console.log(activities);
  return (
    <Place>
      {activities.map((value, index) => (
        <ActivityPlace key={index} place={value} />
      ))}
    </Place>
  );
}

const Place = styled.div`
  display: flex;
  align-items: center;
`;
