import React from 'react'

interface ProductsProps {
  title: string
}

const Products = (props: ProductsProps) => {
  return (
    <>
      <div> Products List - works </div>
      <h1> {props.title} </h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  )
}

export default Products
