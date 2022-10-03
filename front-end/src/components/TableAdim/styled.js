import styled from 'styled-components';

export const Title = styled.h1`
  margin: 2% 4%;
`;

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.color.background}; 
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.primario};
  margin: 0 4%;
  padding: 24px 32px;
  width: 90%;
`;

export const TableRow = styled.tr`
  height: 32px;
  text-align: center;

  th:nth-child(1) {
    font-weight: 400;
    width: 2%;
  }

  th:nth-child(2) {
    font-weight: 400;
    width: 24%;
  }

  th:nth-child(3) {
    font-weight: 400;
    width: 24%;
  }

  th:nth-child(4) {
    font-weight: 400;
    width: 24%;
  }

  th:nth-child(5) {
    font-weight: 400;
    width: 4%;
  }

  td:nth-child(1) {
    background: ${({ theme }) => theme.color.primario};
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
    width: 26px;
  }

  td:nth-child(2) {
    background: ${({ theme }) => theme.color.background};
  }

  td:nth-child(3) {
    background: ${({ theme }) => theme.color.primario};
    color: ${({ theme }) => theme.color.textLight};
    font-weight: bold;
  }

  td:nth-child(4) {
    background: ${({ theme }) => theme.color.terciario};
    color: ${({ theme }) => theme.color.textLight};
    font-weight: bold;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.secundario};
  border: none;
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  padding: 12px 24px;
`;
