export const TicketStatus = Object.freeze({
  PAID: 'PAID',
  RESERVED: 'RESERVED',
});

export async function verifyPermission({ ticket, setAuthStatus, ticketError }) {
  if (ticketError) {
    setAuthStatus({
      isAllowed: false,
      message: 'Você precisa ter selecionar seu ingresso antes de fazer a escolha de atividades',
    });
    return;
  }

  if (ticket.status === TicketStatus.RESERVED) {
    setAuthStatus({
      isAllowed: false,
      message: 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades',
    });
    return;
  }

  if (ticket.TicketType.isRemote === true) {
    setAuthStatus({
      isAllowed: false,
      message: 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.',
    });
    return;
  }
}
