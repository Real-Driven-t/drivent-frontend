import styled from 'styled-components';

export default function TicketInfoContainer( { ticketType } ) {
  const ticketInfo = {
    name: 'abvab',
  };
  console.log(ticketType);
  if(ticketType.isRemote) {
    ticketInfo.name ='Online';
  } else if(!ticketType.includesHotel) {
    ticketInfo.name ='Presencial';
  } else {
    ticketInfo.name ='Presencial + Com Hotel';
  };

  return (
    <TicketContainer>
      <h1>{ticketInfo.name}</h1>
      <h2>R$ {ticketType.price}</h2>
    </TicketContainer>
  );
};

const TicketContainer = styled.div`
  width: 290px;
  height: 108px;
  background-color: #FFEED2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 16px;
    color: #454545;
  }
  h2 {
    font-size: 14px;
    color: #898989;
    margin-top: 8px;
  }
`;
