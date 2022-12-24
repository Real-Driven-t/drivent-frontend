import styled from 'styled-components';
import useActivitiesBooking from '../../hooks/api/useActivitiesBooking';
import ActivityPlace from './ActivityPlace';

export default function Activities({ activities }) {
  const { activitiesBooking } = useActivitiesBooking();

  return (
    <Place>
      {!activitiesBooking ? (
        <></>
      ) : (
        activities.map((value, index) => <ActivityPlace key={index} place={value} userBookings={activitiesBooking} />)
      )}
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
