import React from "react"

function Product(props) {
  return (
  <div>
    <h3>Product Name: {props.product.name}</h3>
    <p>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}</p>
    <p>{props.product.description}</p>
    <hr></hr>
  </div>
  
  )
}

export default Product 