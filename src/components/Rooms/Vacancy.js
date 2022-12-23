import { useState, useEffect } from 'react';

import { VacancySelected, VacancyFree } from './Icons';

export default function Vacancy({
  setBackground,
  roomId,
  handleClick,
  selectedId,
  position,
  positionVacancy,
  setPositionVacancy,
}) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedId !== 0 && selectedId !== roomId) {
      setIsSelected(false);
      setBackground('white');
    }
  }, [selectedId]);

  useEffect(() => {
    if (positionVacancy !== 0 && positionVacancy !== position) {
      setIsSelected(false);
    }
  }, [positionVacancy]);
  return (
    <div
      onClick={() => {
        if (!isSelected) {
          handleClick(roomId);
          setIsSelected(true);
          setBackground('#FFEED2');
          setPositionVacancy(position);
        } else {
          setIsSelected(false);
          setBackground('white');
          handleClick(0);
          setPositionVacancy(0);
        }
      }}
    >
      {isSelected ? <VacancySelected /> : <VacancyFree />}
    </div>
  );
}
