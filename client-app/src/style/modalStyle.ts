import styled from 'styled-components';

export const ModalFrame = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9;
  background: rgb(0 0 0 / 46%);
`;
export const ModalBox = styled.div`
  width: 50vh;
  padding: 1.9rem;
  max-height: calc(100vh - 350px);
  background: white;

  position: absolute;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9px;
`;

export const BiggerModalBox = styled(ModalBox)`
  width: 75%;
  height: auto;
`;
export const MessageBox = styled.div`
  padding: 4rem 0;
  text-align: center;
`;
