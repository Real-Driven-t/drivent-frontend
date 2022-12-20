import ValidateHotel from './ValidateHotels';

import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelsRender from './HotelsRender';

export default function SelectHotels() {
  const [authStatus, setAutStatus] = useState({
    isAllowed: true,
    message: '',
  });

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <ValidateHotel authStatus={authStatus} setAutStatus={setAutStatus} />
      {authStatus.isAllowed ? <HotelsRender /> : <></>}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
