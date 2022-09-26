import styled from 'styled-components';

export const ButtonCart = styled.button`
  background: ${({ theme }) => theme.color.primario};
  padding: 18px;
  position: fixed;
  top: 86%;
  left: 86%;
`;

export const Text = styled.h1`
  color: ${({ theme }) => theme.color.textLight};
  font-size: 18px;
  font-weight: bold;
`;

export const Container = styled.section`  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 4%;
  margin: auto;
  width: 78%;
`;
