import styled from 'styled-components';
import ActivityWrappler from './ActivityWrappler';

export default function ActivityPlace({ place }) {
  return (
    <Wrappler>
      <Title>{place.name}</Title>
      <Container>
        {place.Activity.map((value, index) => (
          <ActivityWrappler key={index} info={value} />
        ))}
      </Container>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  max-width: 265px;
  min-height: 390px;
  border: 1px solid #d7d7d7;
  padding: 10px 0 0 0;

  @media only screen and (max-width: 748px) {
    max-width: 100%;
    margin-bottom: 30px;
    min-height: fit-content;
  }
`;
