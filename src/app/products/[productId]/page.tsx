import React from 'react'

interface ProductDetailsProps {
  title: string
  params: { productId: string }
}

const ProductDetails = ({ params, title }: ProductDetailsProps) => {
  const { productId } = params
  console.log(productId)
  return (
    <>
      <div> ProductDetails - works </div>
      <h1> {title} </h1>
      <h2>productId: {productId}</h2>
    </>
  )
}

export default ProductDetails
