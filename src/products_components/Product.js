import React from "react"

function showAlert(desc) {
  alert(desc);
}

function Product(props) {
  return (
  <div>
    <h3>Product Name: {props.product.name}</h3>
    <p>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}</p>
    <button type="button" onClick={() => showAlert(props.product.description)}>Description</button>
  </div>
  
  )
}

export default Product 