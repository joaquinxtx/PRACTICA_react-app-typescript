import { useProduct } from "../hooks/useProduct";

import React, { createContext, ReactElement } from "react";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/productsInterface";
import styles from "../styles/styles.module.css";



export const ProductContext = createContext({}as ProductContextProps)

const{Provider}=ProductContext;

export interface ProductsCardProps {
  product: Product
  children?:ReactElement| ReactElement[];
  className?:string;
  style?:React.CSSProperties
  onChange?:(args:onChangeArgs)=> void;
  value?:number;
}

export const ProductCard = ({ children,product,className,style,onChange,value }: ProductsCardProps) => {
  const { counter, increaseBy } = useProduct({onChange,product,value});

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


