import React from 'react'

interface NotFoundProps {
  title: string
}

const NotFound = (props: NotFoundProps) => {
  return (
    <>
      <h1> {props.title} </h1>
      <h2>Review not found</h2>
      <div> Could not find request resource </div>
    </>
  )
}

export default NotFound
