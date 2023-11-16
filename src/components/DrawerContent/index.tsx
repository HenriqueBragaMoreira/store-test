import { useCartStore } from "@/lib/zustand/zustand";
import { Product } from "@/types/all-products";
import { useQueryClient } from "@tanstack/react-query";
import { BsCartX, BsDash, BsPlusLg, BsXLg } from "react-icons/bs";
import Image from "next/image";
import {
  AmountButton,
  ContainerDrawer,
  ContainerProduct,
  DivButton,
  EmptyDiv,
  FinalPrice,
  Price,
  ContainerButtons,
  Buttons,
  Div,
  ButtonRemove,
} from "./styles";
import { Toaster, toast } from "sonner";

interface DrawerProps {
    onClose: () => void;
}

export default function DrawerContent({onClose}: DrawerProps) {
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

  const totalCart = products.reduce((acc, product) => {
    return (
      acc +
      product.amount *
        Number(productList?.find((p) => p.id === product.id)!.price)
    );
  }, 0);

  const isCartEmpty = products.length === 0;

  return (
    <ContainerDrawer>
      {productList?.map((product) => (
        <ContainerProduct key={product.id}>
          <Image height={60} width={70} src={product.photo} alt={product.name} />
          <span>{product.name}</span>
          <ButtonRemove
              aria-label={`Remover ${product.name} do carrinho`}
              onClick={() => handleRemoveProduct(product.id)}
            >
              <BsXLg />
            </ButtonRemove>
          <DivButton>
            <AmountButton
              aria-label={`Remover um ${product.name} do carrinho`}
              onClick={() => handleDecrementAmount(product.id)}
              disabled={products.find((p) => p.id === product.id)?.amount === 1}
            >
              <BsDash />
            </AmountButton>
            <p>{products.find((p) => p.id === product.id)?.amount}</p>
            <AmountButton
              aria-label={`Adicionar mais um ${product.name} ao carrinho`}
              onClick={() => handleIncrementAmount(product.id)}
            >
              <BsPlusLg />
            </AmountButton>
          </DivButton>
          <Price>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(product.price))}
          </Price>
        </ContainerProduct>
      ))}
      {isCartEmpty ? (
        <EmptyDiv>
          <h2>Nenhum produto selecionado...</h2>
        </EmptyDiv>
      ) : (
        <Div>
          <ContainerButtons>
            <Buttons.Button
              leftSection={<BsCartX />}
              color="gray"
              onClick={() => handleRemoveAllProducts()}
            >
              Limpar carrinho
            </Buttons.Button>
            <FinalPrice>
              <p>Total: </p>
              <p>
                {" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(totalCart))}
              </p>
            </FinalPrice>
          </ContainerButtons>
          <Toaster />
          <Buttons.Button
            fullWidth
            h={60}
            color="black"
            onClick={() => {
              handleRemoveAllProducts();
              toast.success('Sua compra foi finalizada com sucesso!');
              onClose();
            }}
          >
            Finalizar Compra
          </Buttons.Button>
        </Div>
      )}
    </ContainerDrawer>
  );
}
