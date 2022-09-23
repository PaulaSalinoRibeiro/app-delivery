import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.primario};
  height: 39px;
`;

export const User = styled.div`
  background: ${({ theme }) => theme.color.terciario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
  margin-left: 52%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 332px;
`;

export const LogoutButton = styled.button`
  width: 180px;
  border: none;
  background: ${({ theme }) => theme.color.quaternario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonProducts = styled.button`
  width: 332px;
  border: none;
  background: ${({ theme }) => theme.color.secundario};
  color: ${({ theme }) => theme.color.textDark};
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonMyOrders = styled.button`
  width: 332px;
  border: none;
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonManageOrders = styled.button`
  width: 332px;
  border: none;
  background: ${({ theme }) => theme.color.secundario};
  color: ${({ theme }) => theme.color.textDark};
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonManageUsers = styled.button`
  width: 332px;
  border: none;
  background: ${({ theme }) => theme.color.secundario};
  color: ${({ theme }) => theme.color.textDark};
  font-weight: bold;
  font-size: 18px;
`;
