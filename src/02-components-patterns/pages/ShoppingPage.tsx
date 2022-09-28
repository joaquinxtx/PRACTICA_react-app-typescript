
import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { products } from "../data/products";



import "../styles/custom-styles.css";

const product = products[0];


export const ShoppingPage = () => {

 
  return (
    <div>
      <h1>Shopping page</h1>
      <hr /> 
            <ProductCard 
            product={product} 
            className="bg-dark" 
            key={product.id} 
            initialValues={{
              count:4,
              maxCount:10
            }} 
            >
              {
                ({reset,count,increaseBy,isMaxCountReached,maxCount})=>(
                  <>
                  
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-white" />
                  <ProductButtons className="custom-boton" />
                  <button onClick={reset}>reset </button>
                  <button onClick={()=>increaseBy(-2)}>-2 </button>
                  {
                    (!isMaxCountReached && <button onClick={()=> increaseBy(2)}>+2 </button>)
                    
                  }
                  <span>{count} ---- {maxCount} </span>
                  </>
                )
              }
            </ProductCard>
          
      </div>

          
    
  );
};
