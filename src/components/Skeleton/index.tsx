import { Skeleton } from "@mantine/core";
import { GridProducts } from "./styles";

export const SkeletonCards = () => {
    return (
        <GridProducts>
            <Skeleton height={507} width={268}/>
            <Skeleton height={507} width={268}/>
            <Skeleton height={507} width={268}/>
            <Skeleton height={507} width={268}/>
            <Skeleton height={493} width={268}/>
            <Skeleton height={493} width={268}/>
            <Skeleton height={493} width={268}/>
            <Skeleton height={493} width={268}/>
        </GridProducts>
    )
}