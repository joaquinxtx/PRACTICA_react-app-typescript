import { useProduct } from "../hooks/useProduct";

import React, { createContext, ReactElement } from "react";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/productsInterface";
import styles from "../styles/styles.module.css";



export const ProductContext = createContext({}as ProductContextProps)

const{Provider}=ProductContext;

export interface ProductsCardProps {
  product: Product
  //children?:ReactElement| ReactElement[];
  children:(args:ProductCardHandlers)=>JSX.Element;
  className?:string;
  style?:React.CSSProperties
  onChange?:(args:onChangeArgs)=> void;
  value?:number;
  initialValues?:InitialValues
}

export const ProductCard = ({ children,product,className,style,onChange,value,initialValues }: ProductsCardProps) => {
  const { counter, increaseBy,maxCount,isMaxCountReached,reset } = useProduct({onChange,product,value,initialValues});

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount
    }}>

      <div className={`${styles.productCard} ${className}`}
      style={style}>
        {children({
          count:counter,
          isMaxCountReached,
          maxCount:initialValues?.maxCount,
          product,
          increaseBy,
          reset

        })}
      </div>
    </Provider>
  );
};


