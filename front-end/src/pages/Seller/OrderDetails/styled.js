import styled from 'styled-components';

export const Container = styled.main``;

export const Title = styled.h1`
  margin: 4%;
`;

export const Main = styled.main`
  margin: 4%;
`;

export const Total = styled.div`
  background: ${({ theme }) => theme.color.primario};
  box-shadow: ${({ theme }) => theme.shadow.primario};
  padding: 2px 46px;
  border-radius: 8px;
  margin-left: 84%;
  margin-top: 4%;
  width: 200px; 

  p {
    color: ${({ theme }) => theme.color.textLight};
    text-align: center;
    font-size: 26px;
    font-weight: bold;
  }
`;
