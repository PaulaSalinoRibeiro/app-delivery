import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.color.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.primario};
  padding: 32px;
  width: 100%;
`;

export const TableRow = styled.tr`
  height: 28px;

  th:nth-child(1) {
    font-weight: 400;
    width: 26px;
  }

  th:nth-child(2) {
    font-weight: 400;
    width: 68%;
  }

  th:nth-child(3) {
    font-weight: 400;
    width: 8%;
  }

  th:nth-child(4) {
    font-weight: 400;
    width: 8%;
  }

  th:nth-child(5) {
    font-weight: 400;
    width: 8%;
  }

  td:nth-child(1) {
    background: ${({ theme }) => theme.color.secundario};
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
  }

  td:nth-child(2) {
    background: ${({ theme }) => theme.color.background};
  }

  td:nth-child(3) {
    background: ${({ theme }) => theme.color.primario};
    color: ${({ theme }) => theme.color.textLight};
    font-weight: bold;
    text-align: center;
  }

  td:nth-child(4) {
    background: ${({ theme }) => theme.color.terciario};
    color: ${({ theme }) => theme.color.textLight};
    font-weight: bold;
    text-align: center;
  }

  td:nth-child(5) {
    background: ${({ theme }) => theme.color.quaternario};
    color: ${({ theme }) => theme.color.textLight};
    font-weight: bold;
    text-align: center;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.secundario};
  border: none;
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  padding: 12px;
`;
