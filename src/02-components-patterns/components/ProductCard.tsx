import { useProduct } from "../hooks/useProduct";

import React, { createContext, ReactElement } from "react";
import { Product, ProductContextProps } from "../interfaces/productsInterface";
import styles from "../styles/styles.module.css";



export const ProductContext = createContext({}as ProductContextProps)

const{Provider}=ProductContext;

export interface ProductsCardProps {
  product: Product
  children?:ReactElement| ReactElement[];
  className?:string;
  style?:React.CSSProperties
}

export const ProductCard = ({ children,product,className,style }: ProductsCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
    }}>

      <div className={`${styles.productCard} ${className}`}
      style={style}>
        {children}
        {/* <ProductImage img={product.img} />

        <ProductTitle title={product.title} />

        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
      </div>
    </Provider>
  );
};


