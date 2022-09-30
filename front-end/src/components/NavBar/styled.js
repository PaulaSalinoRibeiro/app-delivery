import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.primario};
  height: 52px;
`;

export const User = styled.div`
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.color.terciario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  margin-left: 52%;
  width: 732px;
`;

export const LogoutButton = styled.button`
  background: ${({ theme }) => theme.color.quaternario};
  border: none;
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
  width: 180px;
`;

export const ButtonProducts = styled.button`
  background: ${({ theme }) => theme.color.secundario};
  border: none;
  color: ${({ theme }) => theme.color.textDark};
  font-weight: bold;
  font-size: 18px;
  width: 332px;
`;

export const ButtonMyOrders = styled.button`
  background: ${({ theme }) => theme.color.primario};
  border: none;
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
  width: 332px;
`;

export const ButtonManageOrders = styled.button`
  background: ${({ theme }) => theme.color.secundario};
  border: none;
  color: ${({ theme }) => theme.color.textDark};
  font-weight: bold;
  font-size: 18px;
  width: 332px;
`;

export const ButtonManageUsers = styled.button`
  background: ${({ theme }) => theme.color.secundario};
  border: none;
  color: ${({ theme }) => theme.color.textDark};
  font-weight: bold;
  font-size: 18px;
  width: 332px;
`;
