import { useState, useEffect } from 'react';

import { VacancySelected, VacancyFree } from './Icons';

export default function Vacancy({ setBackground, roomId, handleClick, selectedId }) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (selectedId !== 0 && selectedId !== roomId) {
      setIsSelected(false);
      setBackground('white');
    }
  }, [selectedId]);

  return (
    <div
      onClick={() => {
        if (!isSelected) {
          handleClick(roomId);
          setIsSelected(true);
          setBackground('#FFEED2');
        } else {
          setIsSelected(false);
          setBackground('white');
          handleClick(0);
        }
      }}
    >
      {isSelected ? <VacancySelected /> : <VacancyFree />}
    </div>
  );
}
