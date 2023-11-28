"use client";
import {
  Container,
  ContainerCard,
  ContainerName,
  ContainerPrice,
  DataDisplay,
  Footer,
  GridProducts,
} from "./styles";
import { Badge, Button, Text } from "@mantine/core";
import Image from "next/image";
import { LuShoppingBag } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, Product } from "@/types/all-products";
import { SkeletonCards } from "../Skeleton";
import { useCartStore } from "@/lib/zustand/zustand";

export default function ProductsCard() {
  const { add: handleAddToCart } = useCartStore();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get<ApiResponse>(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products",
        {
          params: {
            page: 1,
            rows: 10,
            sortBy: "id",
            orderBy: "DESC"
          }
        }
      );

      return response.data.products;
    },
  });

  return (
    <Container>
      <GridProducts>
        {isLoading ? (
          <SkeletonCards />
        ) : (
          products?.map((product: Product) => (
            <DataDisplay.Card
              key={product.id}
              shadow="lg"
              radius="md"
              withBorder
            >
              <ContainerCard>
                <DataDisplay.Card.Section>
                  <Image src={product.photo} alt={product.name} height={230} width={250}/>
                </DataDisplay.Card.Section>
                <ContainerPrice>
                  <ContainerName>
                    <Text fw={400}>{product.name}</Text>
                  </ContainerName>
                  <Badge color="var(--value-color)" size="lg" radius="sm">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(product.price))}
                  </Badge>
                </ContainerPrice>

                <Text size="sm">{product.description}</Text>
              </ContainerCard>
              <Button
                leftSection={<LuShoppingBag />}
                onClick={() => handleAddToCart(product.id)}
                color="#0F52BA"
                fullWidth
              >
                COMPRAR
              </Button>
            </DataDisplay.Card>
          ))
        )}
      </GridProducts>
        <Footer>braga © Todos os direitos reservados</Footer>
    </Container>
  );
}
