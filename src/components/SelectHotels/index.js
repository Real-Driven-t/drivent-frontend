import ValidateHotel from './ValidateHotels';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function SelectHotels() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <ValidateHotel />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
