import styled from "styled-components";
import { Drawer, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

export const Buttons = {
    Button
}

export const Overlays = {
    Drawer,
    useDisclosure
}

export const MyDrawer = styled(Drawer)`
    .mantine-Drawer-content{
        background-color: #0F52BA;
    }
    .mantine-Drawer-header{
        background-color: #0F52BA;
        color: white;
    }
    .mantine-Drawer-title{
        font-size: 27px;
        font-weight: 700;
    }
    .mantine-Drawer-close{
        background-color: black;
        color: white;
        border-radius: 50%;
    }
`

export const Container = styled.div`

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0F52BA;
    height: 6.3rem;
    padding: 0rem 5.5rem 0rem 4rem;

    .mantine-Button-root{
        width: 5.6rem;
        height: 2.8rem;
    }

    .mantine-Button-label{
        color: black;
    }

`

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--primary);
`

export const Div = styled.div`
    display: flex;
    align-items: center;
   

    .drawer{
        .mantine-Drawer-root{
            background-color: #0F52BA;
        }
         .mantine-Drawer-content{
        background-color: #0F52BA;
    }
    .mantine-Paper-root{
        background-color: #0F52BA;
    }
    .mantine-Drawer-close{
        background-color: black;
    }
    }
`

export const Paragraph = styled.p`
    font-size: 1.25rem;
    color: var(--primary);
    font-weight: 300;
    margin: .5rem 0rem 0rem .5rem;
`