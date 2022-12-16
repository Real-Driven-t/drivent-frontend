import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OptionName } from './ticketOptions';

export default function OneCard({ element, selected, setSelected }) {
  const [dollarText, setDollarText] = useState('$ ');
  const { name, price } = element;

  useEffect(() => {
    if (name === OptionName.WITHOUT_HOTEL || name === OptionName.WITH_HOTEL) {
      setDollarText('+ $ ');
    }
  }, []);

  return (
    <Card selected={selected} name={name} onClick={() => setSelected(name)}>
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
  cursor: pointer;
  span {
    color: #898989;
    font-size: 14px;
    font-weight: 400;
    margin-top: 3px;
  }
  p {
    color: #454545;
    font-size: 16px;
    font-weight: 400;
  }
`;
