import styled from 'styled-components';

export const Container = styled.section` 
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top:10%;
  width: 50%;
`;

export const Image = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Forms = styled.form`
  background: ${({ theme }) => theme.color.background};
  border: 3px solid ${({ theme }) => theme.color.primario};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.primario};
  display: flex;
  flex-direction: column;
  height: 444px;
  left: 750px;
  padding: 12px 24px;
  top: 501px;
  width: 425px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  padding:18px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 8px;
  margin-top: 6px;
  padding: 16px;
  width: 90%;

  &:focus: {
    border: 3px solid ${({ theme }) => theme.color.primario};
  }
`;

export const ButtonLogin = styled.button`
  background: ${({ theme }) => theme.color.primario};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.textLight};
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 12px auto;
  padding: 18px;
  width: 90%;
`;

export const ButtonRegister = styled.button`
  background: ${({ theme }) => theme.color.textLight};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.primario};
  display: flex;
  justify-content: center;
  margin: 12px auto;
  padding: 18px;
  width: 90%;
`;

export const FailLogin = styled.p`
  color: red;
  width: 68%;
`;
