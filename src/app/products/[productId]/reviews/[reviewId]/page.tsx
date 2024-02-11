import { notFound } from 'next/navigation'

interface ReviewDetailsProps {
  title: string
  params: { productId: string; reviewId: string }
}

const ReviewDetails = ({ params, title }: ReviewDetailsProps) => {
  const { reviewId, productId } = params
  if (Number(reviewId) > 1000) {
    notFound()
  }
  return (
    <>
      <div> ReviewDetails - works </div>
      <h1> {title} </h1>
      <h2>
        Review {reviewId} for product {productId}
      </h2>
    </>
  )
}

export default ReviewDetails
