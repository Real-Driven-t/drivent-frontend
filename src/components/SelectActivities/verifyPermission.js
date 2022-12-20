export const TicketStatus = Object.freeze({
  PAID: 'PAID',
  RESERVED: 'RESERVED',
});

export async function verifyPermission({ ticket, setAutStatus, ticketError }) {
  if (ticketError) {
    setAutStatus({
      isAllowed: false,
      message: 'Você precisa ter selecionar seu ingresso antes de fazer a escolha de atividades',
    });
    return;
  }

  if (ticket.status === TicketStatus.RESERVED) {
    setAutStatus({
      isAllowed: false,
      message: 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades',
    });
    return;
  }

  if (ticket.TicketType.isRemote === true) {
    setAutStatus({
      isAllowed: false,
      message: 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.',
    });
    return;
  }
}
