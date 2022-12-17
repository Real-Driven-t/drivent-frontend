import styled from 'styled-components';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useState } from 'react';

const VacancyOccupied = styled(IoPerson)`
  color: black;
  font-size: 27px;
`;
const VacancySelected = styled(IoPerson)`
  font-size: 27px;
  color: #ef5c90;
`;
const VacancyFree = styled(IoPersonOutline)`
  color: black;
  font-size: 27px;
`;
function Vacancy({ setBackground }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      onClick={() => {
        if (!isSelected) {
          setIsSelected(true);
          setBackground('#FFEED2');
        } else {
          setIsSelected(false);
          setBackground('white');
        }
      }}
    >
      {isSelected ? <VacancySelected /> : <VacancyFree />}
    </div>
  );
}

export { VacancyOccupied, Vacancy };
