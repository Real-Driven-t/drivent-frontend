import styled from 'styled-components';
import ActivityPlace from './ActivityPlace';

export default function Activities({ activities }) {
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

  @media only screen and (max-width: 748px) {
    flex-direction: column;
  }
`;
