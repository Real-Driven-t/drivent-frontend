import * as Op from './ticketOptions';
import styled from 'styled-components';
import OneCard from './OneCard';

export default function RemoteOptions({ localyName, setLocalyName }) {
  return (
    <Wrapper>
      <p>Primeiro, escolha sua modalidade de ingresso</p>
      <div>
        {Op.remoteOptions.map((e, index) => {
          return <OneCard key={index} element={e} selected={localyName} setSelected={setLocalyName} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 44px;

  & > :last-child {
    display: flex;
    margin-top: 17px;
  }

  p {
    color: #8e8e8e;
    font-size: 20px;
    font-weight: 400;
  }
`;
