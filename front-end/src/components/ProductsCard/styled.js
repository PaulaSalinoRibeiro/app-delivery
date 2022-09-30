import styled from 'styled-components';

export const Container = styled.section` 
  display: flex;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.color.background};
  border-radius: 8px;
  margin: 8px;
  width: 22%;
`;

export const Price = styled.p`
  background: ${({ theme }) => theme.color.backgroundSecundario};
  color: ${({ theme }) => theme.color.textDark};
  padding: 8px 16px;
  font-weight: bold;
  font-size: 18px;
  margin-left: 16px;
  width: 16%;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ManagerItem = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.background};
  padding: 12px 0;
  width: 100%;

`;

export const IncreaseButton = styled.button`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
  padding: 8px 16px; 
  border-radius: 8px;
`;

export const DecreaseButton = styled.button`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
  padding: 8px 16px; 
  border-radius: 8px;
`;

export const Text = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 0; 
  width: 28px;
`;

export const Input = styled.input`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  border: none;
  height: 24px;
  width: 28px;
`;
