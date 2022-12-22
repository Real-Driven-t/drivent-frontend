import styled from 'styled-components';
import ActivityPlace from './ActivityPlace';

export default function DayButton({ activities }) {
  function setDate() {
    const hash = { 0: 'Domingo', 1: 'Segunda', 2: 'Terça', 3: 'Quarta', 4: 'Quinta', 5: 'Sexta', 6: 'Sábado' };
    const start = new Date(activities[0].Activity[0].start);
    const month = start.getMonth();
    const day = start.getDate();
    const week = start.getDay();
    return `${hash[week]}, ${day}/${month}`;
  }

  return (
    <>
      <Day>{setDate()}</Day>
      <Place>
        {activities.map((value, index) => (
          <ActivityPlace key={index} place={value} />
        ))}
      </Place>
    </>
  );
}

const Day = styled.div`
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
`;

const Place = styled.div`
  display: flex;
  align-items: center;
`;
