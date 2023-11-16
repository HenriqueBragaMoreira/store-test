"use client";
import {
  Div,
  Nav,
  Paragraph,
  Title,
  Overlays,
  Buttons,
  Container,
  MyDrawer,
} from "./styles";
import { TiShoppingCart } from "react-icons/ti";
import { useCartStore } from "@/lib/zustand/zustand";
import DrawerContent from "../DrawerContent";

export default function Header() {
  const { products } = useCartStore();

  const [opened, { open, close }] = Overlays.useDisclosure(false);

  return (
    <Container>
      <Nav>
        <Div>
          <Title>MKS</Title>
          <Paragraph>Sistemas</Paragraph>
        </Div>

        <Buttons.Button
          onClick={open}
          title="Shopping Car Button"
          color="var(--primary)"
          leftSection={<TiShoppingCart size={19} color="000000" />}
        >
          {products.length}
        </Buttons.Button>
      </Nav>
      <MyDrawer
        color="#0F52BA"
        position="right"
        opened={opened}
        onClose={close}
        size={"30.5rem"}
        title="Carrinho de Compra"
      >
        <DrawerContent onClose={close}/>
      </MyDrawer>
    </Container>
  );
}
