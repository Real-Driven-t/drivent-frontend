import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Button from '../Form/Button';
import useBooking from '../../hooks/api/useBooking';

export default function HotelResume() {
  const { booking } = useBooking();
  const getCapacity = () => {
    const capacity = booking?.Room.capacity;
    if (capacity === 1) {
      return 'single';
    }
    if (capacity === 2) {
      return 'Double';
    }
    return 'Triple';
  };
  const peopleInThisRoom = () => {
    const bookings = booking?.totalBookings.length;
    if (bookings === 1) {
      return 'Somente você';
    }
    return `Você e mais ${booking - 1}`;
  };
  console.log(booking);
  return (
    <>
      <Typography variant="h4">Escolha de hotel e quarto</Typography>
      <h2 style={{ color: '#8E8E8E', margin: '36px 0 14px 0', fontFamily: 'Roboto, sans-serif' }}>
        Você já escolheu seu quarto:
      </h2>
      {booking ? (
        <Description>
          <img src={booking.Room.Hotel.image} alt="hotel" />
          <p>{booking.Room.Hotel.name}</p>
          <h1>Quarto reservado</h1>
          <h2>
            {booking.Room.name} ({getCapacity()})
          </h2>
          <h1>Pessoas no seu quarto</h1>
          <h2>{peopleInThisRoom()}</h2>
        </Description>
      ) : (
        ''
      )}
      <Button>TROCAR DE QUARTO</Button>
    </>
  );
}

const Description = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  margin: 0 20px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: #ffeed2;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 36px;
  img {
    max-width: 168px;
    height: auto;
    border-radius: 5px;
  }
  p {
    width: 90%;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin: 10px 0;
  }
  h1 {
    width: 90%;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
  }
  h2 {
    width: 90%;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
    margin: 2px 0 14px 0;
  }
`;
