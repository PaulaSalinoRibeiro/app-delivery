import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  width: 16%;
`;

export const Button = styled.button`
  margin-top: 24px;
  margin-left: 40%;
  font-weight: bold;
  padding: 14px 28px;
  color: ${({ theme }) => theme.color.textLight};
  background: ${({ theme }) => theme.color.primario};
  border: none;
  border-radius: 8px;
`;
