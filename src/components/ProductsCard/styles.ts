import styled from "styled-components";
import { Card, Image, Group } from '@mantine/core'

export const Layout = {
    Group,
}

export const DataDisplay = {
    Card,
    Image,
}

export const Container = styled.div`
    .mantine-Card-root{
        text-align: center;
        padding: 0px;
    }
`

export const GridProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 1.375rem;
    padding: 2.5rem 5rem;
    flex-wrap: wrap;
    box-sizing: border-box; 
    .mantine-Card-root{
        width: 268px;
    }
    .mantine-Button-root{
        margin-top: auto;
    }
`

export const ContainerName = styled.div`
    width: 120px;
`

export const ContainerPrice = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 2px;
`

export const ContainerCard = styled.div`
    padding: 12px;
`

export const Footer = styled.footer`
    background-color: #EEEEEE;
    width: 100%;
    font-weight: 700;
    text-align: center;
    padding: 10px;
`