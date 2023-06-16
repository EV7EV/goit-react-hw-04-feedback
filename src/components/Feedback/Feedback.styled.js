import styled from 'styled-components';

const FeedBackWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  letter-spacing: 1.07px;
  background-color: grey;
  color: white;
  cursor: pointer;
  transition: 250ms linear;
  &:active {
    scale: 1.2;
  }
`;

export { Button, FeedBackWrapper };
