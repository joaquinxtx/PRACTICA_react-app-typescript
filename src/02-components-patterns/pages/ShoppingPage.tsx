
import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";


import "../styles/custom-styles.css";




export const ShoppingPage = () => {

 const{onProductCountChange,shoppingCart}=useShoppingCart()
  return (
    <div>
      <h1>Shopping page</h1>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* -------TECNICA 1------------- */}

        {/* <ProductCard product={product}>
              <ProductCard.Image/>
              <ProductCard.Title title={''} />
              <ProductCard.Buttons  increaseBy={function (value: number): void {
            throw new Error('Function not implemented.')
          } } counter={0}/> 
            </ProductCard> */}

          {products.map((product) => (
            <ProductCard 
            product={product} 
            className="bg-dark" 
            key={product.id} 
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-boton" />
            </ProductCard>
          ))}
      </div>

          <div className="shopping-cart">

            {
              Object.entries(shoppingCart).map(([key,product])=>(
                <ProductCard 
                  key={key}
                  product={product}
                  className="bg-dark text-white "
                  style={{width:'100px'}}
                  onChange={onProductCountChange}
                  value={product.count}
                  
                >
                  <ProductImage className="custom-image" />
                  
                  <ProductButtons className="custom-boton" />
                </ProductCard>

              ))
            }

          </div>

    </div>
  );
};
