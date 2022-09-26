import styled from 'styled-components';

export const Container = styled.section` 
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.textDark};
  border-radius: 8px;
  padding: 4px;
  margin: 8px;
  width: 22%;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.color.textDark};
  font-weight: bold;
  font-size: 18px;
  margin-left: 16px;
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
`;

export const IncreaseButton = styled.button`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
`;

export const DecreaseButton = styled.button`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
`;

export const Text = styled.label`
  text-align: center;
  width: 24px;

  input {
    font-weight: bold;
    font-size: 18px;
    border: none;
  }
`;
