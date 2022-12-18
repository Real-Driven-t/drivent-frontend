import styled from 'styled-components';
import Button from '../Form/Button';

export default function Submit({ value }) {
  return (
    <Wrapper>
      <p>
        Fechado! O total ficou em <span>R$ {value}</span>. Agora é só confirmar:
      </p>
      <Button>RESERVAR INGRESSO</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  p {
    color: #8e8e8e;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 17px;
  }

  & :first-child span {
    font-weight: 700;
  }
`;
