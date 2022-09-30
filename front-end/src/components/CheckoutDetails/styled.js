import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.background};
  border-radius: 8px;
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
  margin-top: 4px;
  padding: 16px;
  border-radius: 8px;
`;

export const InputAddres = styled.input`
  margin-top: 4px;
  padding: 16px;
  border-radius: 8px;
  width: 480px;
`;

export const InputNumber = styled.input`
  margin-top: 4px;
  padding: 16px;
  border-radius: 8px;
`;

export const Button = styled.button`
  margin-top: 24px;
  margin-left: 40%;
  font-weight: bold;
  padding: 16px 64px;
  color: ${({ theme }) => theme.color.textLight};
  background: ${({ theme }) => theme.color.primario};
  border: none;
  border-radius: 8px;
`;
