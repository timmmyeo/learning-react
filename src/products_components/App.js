import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
  const productArray = productsData.map(
  product => 
  <Product 
  key={product.id} 
  product={product}
  />)

  return (
    <div>
        {productArray}
    </div>
  )
}

export default App