import styled from 'styled-components';
import ActivityWrappler from './ActivityWrappler';

export const MiddlePlace = Object.freeze({
  SIDEAUDITORIUM: 'Auditório Lateral',
});

export default function ActivityPlace({ place }) {
  return (
    <Wrappler>
      <Title>{place.name}</Title>
      <Container place={place.name}>
        {place.Activity.map((value, index) => (
          <ActivityWrappler key={index} info={value} />
        ))}
      </Container>
      <ScrollHide />
    </Wrappler>
  );
}

const Wrappler = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ScrollHide = styled.div`
  position: absolute;
  bottom: 1px;
  left: 5px;
  width: 97%;
  height: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #d7d7d7;

  @media only screen and (max-width: 748px) {
    display: none;
  }
`;

const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #7b7b7b;
  margin: 0 0 13px 0;
`;
const Container = styled.div`
  width: 100%;
  height: 390px;
  border: 1px solid #d7d7d7;
  border-left: ${(props) => (props.place === MiddlePlace.SIDEAUDITORIUM ? 'none' : '1px solid #d7d7d7')};
  border-right: ${(props) => (props.place === MiddlePlace.SIDEAUDITORIUM ? 'none' : '1px solid #d7d7d7')};
  padding-top: 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 748px) {
    max-width: 100%;
    height: fit-content;
    margin-bottom: 30px;
    border: 1px solid #d7d7d7;
  }
`;
