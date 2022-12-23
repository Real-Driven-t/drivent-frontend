import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import styled from 'styled-components';

export default function Day({ day, setSelectedDay }) {
  return(
    <>
      <DayContainer onClick={() => setSelectedDay(dayjs(day).format('MM/DD').replace('/', '*'))}>
        {dayjs(day).locale('pt-br').format('dddd').split('-')[0]}, {dayjs(day).format('DD/MM')}
      </DayContainer>
    </>
  );
}

const DayContainer = styled.div`
  width: 131px;
  height: 37px;
  left: 341px;
  top: 273px;
  background: #ffd37d;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 27px 0 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
  cursor: pointer;
`;

const Place = styled.div`
  display: flex;
  align-items: center;
`;
