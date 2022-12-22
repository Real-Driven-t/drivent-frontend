import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import { toast } from 'react-toastify';
import useSaveTicket from '../../hooks/api/useSaveTicket';

export default function Submit({ total, ticketTypes, setReload }) {
  const { saveTicketLoading, saveTicket } = useSaveTicket();
  const [ticketTypeId, setTicketTypeId] = useState(0);

  useEffect(() => {
    ticketTypes.forEach((e) => {
      if (e.price === total) {
        setTicketTypeId(e.id);
      }
    });
  }, [total]);

  async function createTicket() {
    const data = {
      ticketTypeId,
    };

    try {
      await saveTicket(data);
      toast('Informações salvas com sucesso!');
      setReload(reload => reload + 1);
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <Wrapper>
      <p>
        Fechado! O total ficou em <span>R$ {total}</span>. Agora é só confirmar:
      </p>
      <Button onClick={() => createTicket()} disabled={saveTicketLoading}>
        RESERVAR INGRESSO
      </Button>
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
