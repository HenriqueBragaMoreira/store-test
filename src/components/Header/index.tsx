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
import { useQueryClient } from "@tanstack/react-query";
import { Product } from "@/types/all-products";

export default function Header() {
  const query = useQueryClient();

  const {
    products,
    removeAll: handleRemoveAllProducts,
    remove: handleRemoveProduct,
    incrementAmount: handleIncrementAmount,
    decrementAmount: handleDecrementAmount,
  } = useCartStore();

  const productList = query
    .getQueryData<Product[]>(["products"])
    ?.filter((product) => products.find((p) => p.id === product.id));

  const [opened, { open, close }] = Overlays.useDisclosure(false);

  const totalCart = products.reduce((acc, product) => {
    return (
      acc +
      product.amount *
        Number(productList?.find((p) => p.id === product.id)!.price)
    );
  }, 0);

  const isCartEmpty = products.length === 0;

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
        {productList?.map((product) => (
          <div key={product.id}>
            <img width={64} height={64} src={product.photo} alt="" />
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button
              aria-label={`Remover ${product.name} do carrinho`}
              onClick={() => handleRemoveProduct(product.id)}
            >
              X
            </button>
            <button
              aria-label={`Adicionar mais um ${product.name} ao carrinho`}
              onClick={() => handleIncrementAmount(product.id)}
            >
              +
            </button>
            <button
              aria-label={`Remover um ${product.name} do carrinho`}
              onClick={() => handleDecrementAmount(product.id)}
              disabled={products.find((p) => p.id === product.id)?.amount === 1}
            >
              -
            </button>
          </div>
        ))}
        {isCartEmpty ? <p>chega fih cabo a graça</p> : (
          <div>
            <p>{totalCart}</p>
            <button onClick={() => handleRemoveAllProducts()}>
              Limpar carrinho
            </button>
          </div>
        )}
      </MyDrawer>
    </Container>
  );
}
