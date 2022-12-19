import styled from 'styled-components';

export default function HotelDescription({ value }) {
  return (
    <>
      <Description>
        <img src={value.image} alt="hotel" />
        <p>{value.name}</p>
        <h1>Tipos de acomodação:</h1>
        <h1>Vagas disponíveis:</h1>
      </Description>
    </>
  );
}

const Description = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  margin: 0 20px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: #ebebeb;
  img {
    max-width: 168px;
    height: auto;
    border-radius: 5px;
  }
  p {
    width: 90%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin: 10px 0;
  }
  h1 {
    width: 90%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
    margin: 0 0 14px 0;
  }
`;
