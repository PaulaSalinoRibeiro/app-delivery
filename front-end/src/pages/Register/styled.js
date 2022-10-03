import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 12%;
  width: 50%;
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
  top: 501px;
  padding: 12px 24px;
  width: 425px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  padding: 18px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 16px;
  margin-top: 6px;
  width: 90%;

  &:focus: {
    border: 3px solid ${({ theme }) => theme.color.primario};
  }
`;

export const Button = styled.button`
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

export const Validation = styled.p`
  color: red;
  width: 60%;
`;

export const FailConnect = styled.p`
  color: red;
  width: 64%;
`;
