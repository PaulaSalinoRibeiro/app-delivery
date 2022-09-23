import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const TableRow = styled.tr`

  height: 28px;

  th:nth-child(1) {
    width: 26px;
    font-weight: 400;
  }

  th:nth-child(2) {
    width: 72%;
    font-weight: 400;
  }

  th:nth-child(3) {
    width: 26px;
    font-weight: 400;
  }

  th:nth-child(4) {
    width: 26px;
    font-weight: 400;
  }

  th:nth-child(5) {
    width: 26px;
    font-weight: 400;
  }

  td:nth-child(1) {
    background: ${({ theme }) => theme.color.secundario};
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
  }

  td:nth-child(2) {
    background: ${({ theme }) => theme.color.textLight};
  }

  td:nth-child(3) {
    background: ${({ theme }) => theme.color.primario};
    color: ${({ theme }) => theme.color.textLight};
    text-align: center;
    font-weight: bold;
  }

  td:nth-child(4) {
    background: ${({ theme }) => theme.color.terciario};
    color: ${({ theme }) => theme.color.textLight};
    text-align: center;
    font-weight: bold;
  }

  td:nth-child(5) {
    background: ${({ theme }) => theme.color.quaternario};
    color: ${({ theme }) => theme.color.textLight};
    text-align: center;
    font-weight: bold;
  }

`;
