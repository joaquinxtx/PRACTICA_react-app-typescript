import { ProductButtons } from '../components/ProductButtons'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'

const product ={
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping page</h1>

        <hr />
        <div style={{
            display: 'flex',
            flexDirection:'row',
            flexWrap:'wrap'

        }}>



          {/* -------TECNICA 1------------- */}


          {/* <ProductCard product={product}>
              <ProductCard.Image/>
              <ProductCard.Title title={''} />
              <ProductCard.Buttons  increaseBy={function (value: number): void {
            throw new Error('Function not implemented.')
          } } counter={0}/> 
            </ProductCard> */}

            <ProductCard product={product}>
              <ProductImage/>
              <ProductTitle title='hola'/>
              <ProductButtons />    
            </ProductCard>

            <ProductCard product={product}>
              <ProductImage/>
              <ProductTitle />
              <ProductButtons />  
            </ProductCard>


            <ProductCard product={product}>
              <ProductImage/>
              <ProductTitle />
              <ProductButtons />
            </ProductCard>

        </div>
    </div>
  )
}
