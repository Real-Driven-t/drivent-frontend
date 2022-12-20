import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OptionName, OptionValues } from './ticketOptions';

export default function OneCard({ element, selected, setSelected, setTotal }) {
  const [dollarText, setDollarText] = useState('$ ');
  const { name, price } = element;
  const isFirstCard = name === OptionName.ONLINE || name === OptionName.PESENTIAL;

  useEffect(() => {
    if (name === OptionName.WITHOUT_HOTEL || name === OptionName.WITH_HOTEL) {
      setDollarText('+ $ ');
    }
  }, []);

  return (
    <Card
      selected={selected}
      name={name}
      onClick={() => {
        setSelected(name);
        isFirstCard ? setTotal(price) : setTotal(price + OptionValues.WITHOUT_HOTEL);
      }}
    >
      <p>{name}</p>
      <span>
        {dollarText}
        {price}
      </span>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 145px;
  width: 145px;
  border-radius: 20px;
  margin-right: 24px;
  background-color: ${(props) => (props.selected === props.name ? '#FFEED2' : '#fff')};
  border: ${(props) => (props.selected === props.name ? 'none' : '1px solid #cecece')};
  user-select: none;
  cursor: pointer;
  span {
    color: #898989;
    font-size: 14px;
    font-weight: 400;
    margin-top: 3px;
    user-select: none;
  }
  p {
    color: #454545;
    font-size: 16px;
    font-weight: 400;
    user-select: none;
  }
`;
