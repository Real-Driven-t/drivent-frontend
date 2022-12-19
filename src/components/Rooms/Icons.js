import styled from 'styled-components';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';

const VacancyOccupied = styled(IoPerson)`
  color: black;
  font-size: 27px;
`;
const VacancySelected = styled(IoPerson)`
  font-size: 27px;
  color: #ef5c90;
  cursor: pointer;
`;
const VacancyFree = styled(IoPersonOutline)`
  color: black;
  font-size: 27px;
  cursor: pointer;
`;

export { VacancyOccupied, VacancyFree, VacancySelected };
