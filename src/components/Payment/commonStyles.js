import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 17px;

  & > :last-child {
    display: flex;
    margin-top: 17px;
  }

  p {
    color: #8e8e8e;
    font-size: 20px;
    font-weight: 400;
  }
`;

export { Wrapper };
