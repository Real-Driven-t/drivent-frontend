import { IoMdExit, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import useCreateRegisterActivity from '../../hooks/api/useCreateRegisterActivity';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export default function Subscription({ info, setRegistrationCompleted, registrationCompleted }) {
  const { createRegister } = useCreateRegisterActivity(info.id);

  return (
    <>
      {registrationCompleted ? (
        <>
          <Confirmed />
          <h1>Inscrito</h1>
        </>
      ) : (
        <>
          <IoMdExit
            //prettier-ignore
            onClick={async() => {
              try {
                const response = await createRegister();
                if (!response) {
                  toast('Não foi possível realizar a inscrição');
                  return;
                }
                setRegistrationCompleted(true);
                toast('Inscrição realizada com sucesso');
              } catch (error) {
                toast('Não foi possível realizar a inscrição');
              }
            }}
          />
          <h1>{info.capacity} vagas</h1>
        </>
      )}
    </>
  );
}
const Confirmed = styled(IoIosCheckmarkCircleOutline)`
  color: green;
`;
