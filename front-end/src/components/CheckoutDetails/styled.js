import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Form = styled.form`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.primario};
  justify-content: space-between;
  padding: 32px;
  width: 97%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  width: 16%;
`;

export const Select = styled.select`
  border-radius: 8px;
  margin-top: 4px;
  padding: 16px;
`;

export const InputAddres = styled.input`
  border-radius: 8px;
  margin-top: 4px;
  padding: 16px;
  width: 480px;
`;

export const InputNumber = styled.input`
  border-radius: 8px;
  margin-top: 4px;
  padding: 16px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.textLight};
  background: ${({ theme }) => theme.color.primario};
  border: none;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.primario};
  font-weight: bold;
  margin-top: 24px;
  margin-left: 40%;
  padding: 16px 64px;
`;
