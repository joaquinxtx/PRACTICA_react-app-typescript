import { Product } from "../interfaces/productsInterface";

const product1 = {
    id: "1",
    title: "Coffee Mug - Web",
    img: "./coffee-mug.png",
  };
  const product2 = {
    id: "2",
    title: "Coffee Mug - MeMe",
    img: "./coffee-mug2.png",
  };
  
  export const products: Product[] = [product1, product2];