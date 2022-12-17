import { useState } from 'react';
import styled from 'styled-components';
import { VacancyOccupied, Vacancy } from './Icons';

function createFreeVacancies(number, setBackground) {
  const vacancies = [];
  for (let i = 1; i <= number; i++) {
    vacancies.push(<Vacancy setBackground={setBackground} />);
  }
  return vacancies;
}
function createVacanciesOccupied(number) {
  return;
}

export default function Room({ number, capacity, bookings }) {
  const [background, setBackground] = useState('white');
  const freeVacancies = capacity - bookings;
  return (
    <RoomStyle background={background}>
      <span>{number}</span>
      <div>
        {createFreeVacancies(freeVacancies, setBackground).map((e) => e)}
        {/* <VacancyOccupied /> */}
      </div>
    </RoomStyle>
  );
}

const RoomStyle = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 10px;
  background-color: ${(props) => props.background};
  margin: 0 17px 8px 0;
  span {
    font-size: 20px;
    font-weight: bold;
    color: #454545;
  }
  div {
    display: flex;
  }
`;
