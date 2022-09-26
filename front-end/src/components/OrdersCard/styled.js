import styled from 'styled-components';

export const Container = styled.section`
  border: 1px solid red;  
  display: flex;
  flex-direction: column;
  padding-top:10%;
  margin: auto;
  width: 50%;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid red; 
`;
