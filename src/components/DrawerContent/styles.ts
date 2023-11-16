import styled from "styled-components";
import { Button } from '@mantine/core'

export const Buttons = {
    Button
}

export const ContainerDrawer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
`;

export const ContainerProduct = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0.5rem;
  margin: 1rem;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  width: 65px;
`;

export const AmountButton = styled.button`
  background-color: white;
  padding-top: 3px;
  border: 0px;
  cursor: pointer;
`;

export const EmptyDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  color: white;
`;

export const Price = styled.p`
  font-weight: 700;
`;

export const ContainerButtons = styled.div`
  padding: 1rem;
`

export const FinalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-top: 20px;
`;

export const Div = styled.div`
  margin-top: auto;
`

export const ButtonRemove = styled.button`
  position: absolute;
  border: 0px;
  right: 5%;
  transform: translateX(50%);
  background-color: black;
  color: white;
  padding: 5px 9px;
  border-radius: 50%; 
  cursor:pointer;
  margin-bottom: 75px;
  `
