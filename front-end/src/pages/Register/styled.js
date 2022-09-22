import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 12%;
  width: 50%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.textLight}; 
  width: 425px;
  height: 444px;
  left: 750px;
  top: 501px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding:18px;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 90%;
  padding: 16px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  font-size: 18px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
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
