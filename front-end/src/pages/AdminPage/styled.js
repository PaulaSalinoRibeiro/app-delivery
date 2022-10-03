import styled from 'styled-components';

export const Title = styled.h1`
  margin: 4%;
`;

export const Message = styled.p`
  color: red;
  font-size: 18px;
`;

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.color.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.primario};
  display: flex;
  justify-content: space-between;
  margin: 4%;
  padding: 36px 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 18%;
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 14px;
  margin-top: 4px;
  `;

export const Select = styled.select`
  border-radius: 8px;
  padding: 14px;
  margin-top: 4px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.primario};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.textLight};
  display: flex;
  font-size: 18px;
  justify-content: center;
  padding: 18px;
`;
