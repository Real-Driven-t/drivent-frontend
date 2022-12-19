import styled from 'styled-components';
import { RiCheckboxCircleFill } from 'react-icons/ri';

export default function SucessScreen() {  
  return (
    <SucessContainer>
      <RiCheckboxCircleFill color={'#36B853'} size={'70px'}/>
      <div>
        <h1>Pagamento confirmado!</h1>
        <h2>Prossiga para escolha de hospedagem e atividades</h2>
      </div>
    </SucessContainer>
  );
};
  
const SucessContainer = styled.div`
    display:flex;
    align-items: center;
    div {
        display:flex;
        flex-direction: column;
        font-size: 16px;
    }
    h1 {
        font-weight: 700;
    }
    h2 {
        font-weight: 400;
        color: 
    }
`;
