import styled from 'styled-components';

export default function ErrorWrapper({ children }) {
  return (
    <Wapper>
      <p>{children}</p>
    </Wapper>
  );
}

const Wapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  height: calc(100% - 50px);

  p {
    text-align: center;
    max-width: 60%;
    color: #8e8e8e;
    font-weight: 400;
    font-size: 20px;
  }
`;
