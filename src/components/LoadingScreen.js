import Loader from 'react-loader-spinner';
import styled from 'styled-components';

export default function LoadingScreen() {
  return(
    <LoadingWarper>
      <Loader
        type="Oval"
        height="50%"
        width="50%"
        color="gray"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadingWarper>
  );
}

const LoadingWarper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    height: calc(100% - 50px);
    div {
        margin-left: 100px;
    }
`;
