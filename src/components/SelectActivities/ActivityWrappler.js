import styled from 'styled-components';
import { IoMdExit, IoMdCloseCircle } from 'react-icons/io';

export default function ActivityWrappler({ info }) {
  function duration() {
    const start = new Date(info.start);
    const startHour = start.getHours();
    const startMinute = start.getMinutes();

    return `${startHour}:${startMinute} - `;
  }

  return (
    <Container>
      <Title>
        {info.name}
        <h1>{duration()}</h1>
      </Title>
      <Information capacity={info.capacity > 0 ? '#078632' : '#CC6666'}>
        {info.capacity > 0 ? (
          <>
            <IoMdExit />
            <h1>{info.capacity} vagas</h1>
          </>
        ) : (
          <>
            <IoMdCloseCircle />
            <h1>Esgotado</h1>
          </>
        )}
      </Information>
    </Container>
  );
}

const Container = styled.div`
  width: 265px;
  height: 79px;
  left: 350px;
  top: 415px;
  background: #f1f1f1;
  border-radius: 5px;
  margin: 0 10px 10px 10px;
  padding: 5% 0 5% 5%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
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
