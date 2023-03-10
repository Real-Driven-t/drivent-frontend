import { IoMdExit, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import useCreateRegisterActivity from '../../hooks/api/useCreateRegisterActivity';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export default function Subscription({ info, setRegisteredId }) {
  const { createRegister } = useCreateRegisterActivity(info.id);

  async function makeRegister() {
    try {
      const response = await createRegister();
      if (!response) {
        toast('Não foi possível realizar a inscrição');
        return;
      }
      setRegisteredId(info.id);
      toast('Inscrição realizada com sucesso');
    } catch (error) {
      toast('Não foi possível realizar a inscrição');
    }
  }

  return (
    <>
      <IoMdExit onClick={() => makeRegister()} />
      <h1>{info.capacity} vagas</h1>
    </>
  );
}
export const Confirmed = styled(IoIosCheckmarkCircleOutline)`
  color: green;
`;
