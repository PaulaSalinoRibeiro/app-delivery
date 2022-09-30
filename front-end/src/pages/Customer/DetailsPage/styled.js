import styled from 'styled-components';

export const Container = styled.main`
`;

export const Main = styled.div`
  border: 1px solid ${({ theme }) => theme.color.background};
  margin: 4%;
`;

export const Title = styled.h1`
  color: red;
`;

export const Total = styled.div`
  background: ${({ theme }) => theme.color.primario};
  padding: 4px;
  margin-left: 84%;
  width: 200px; 

  p {
    color: ${({ theme }) => theme.color.textLight};
    text-align: center;
    font-size: 26px;
    font-weight: bold;
  }
`;
