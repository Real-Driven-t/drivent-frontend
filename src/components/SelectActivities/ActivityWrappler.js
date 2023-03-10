import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';
import { useEffect, useState } from 'react';
import Subscription, { Confirmed } from './Subscription';

export default function ActivityWrappler({ info, userBookings }) {
  const [diffHours, setDiffHours] = useState(1);
  const [registeredId, setRegisteredId] = useState(0);
  const available = info.capacity - info._count.ActivityBooking > 0 || info.id === registeredId;

  useEffect(() => {
    setDiffHours((new Date(info.duration) - new Date(info.start)) / (1000 * 60 * 60));
    if (userBookings.includes(info.id)) {
      setRegisteredId(info.id);
    }
  }, [info]);

  function duration() {
    const startDate = new Date(info.start);
    const startHour = startDate.toTimeString();

    const durationDate = new Date(info.duration);
    const durationHour = durationDate.toTimeString();

    return `${startHour.slice(0, 5)} - ${durationHour.slice(0, 5)}`;
  }

  return (
    <Container diff={diffHours} info={info} registeredId={registeredId}>
      <Title>
        {info.name}
        <h1>{duration()}</h1>
      </Title>
      <Information capacity={available ? '#078632' : '#CC6666'}>
        <>
          {registeredId === info.id ? (
            <>
              <Confirmed />
              <h1>Inscrito</h1>
            </>
          ) : info.capacity - info._count.ActivityBooking > 0 ? (
            <>
              <Subscription info={info} setRegisteredId={setRegisteredId} />
            </>
          ) : (
            <>
              <IoMdCloseCircle />
              <h1>Esgotado</h1>
            </>
          )}
        </>
      </Information>
    </Container>
  );
}

const Container = styled.div`
  max-width: 265px;
  height: ${(props) => props.diff * 80 + 'px'};
  left: 350px;
  top: 415px;
  background: ${(props) => (props.registeredId === props.info.id ? '#CDF6DB' : '#f1f1f1')};
  border-radius: 5px;
  margin: 0 10px 10px 10px;
  padding: 5% 0 5% 5%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: 748px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
  h1 {
    font-weight: 400;
    margin: 6px 0 0 0;
  }
`;

const Information = styled.div`
  width: 66px;
  height: 100%;
  border-left: 1px solid #cfcfcf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.capacity};
  h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    margin: 5px 0 0 0;
  }
`;
