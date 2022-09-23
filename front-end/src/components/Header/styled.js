import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.textLight};
  margin-bottom: 32px;
`;

export const OrderNumber = styled.div`
  width: 10%;

  p {
    color: ${({ theme }) => theme.color.textDark};
    font-weight: bold;
    text-align: center;
  }

`;

export const OrderName = styled.div`
  width: 20%;

  p {
    color: ${({ theme }) => theme.color.textDark};
    text-align: center;
  }

`;

export const Date = styled.div`
  width: 10%;

  p {
    color: ${({ theme }) => theme.color.textDark};
    font-weight: bold;
    text-align: center;
  }
`;

export const Status = styled.div`
  width: 16%;
  margin-left: 32%;
  background: ${({ theme }) => theme.color.secundario};

  p {
    color: ${({ theme }) => theme.color.textLight};
    font-weight: bold;
    text-align: center;
  }
`;

export const CheckDelivery = styled.button`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  border: none;
  padding: 8px;
`;
