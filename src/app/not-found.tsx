import React from 'react'

interface NotFoundProps {
  title: string
}

const NotFound = (props: NotFoundProps) => {
  return (
    <>
      <h1> {props.title} </h1>
      <h2>Page not found</h2>
      <div> Could not find request resource </div>
    </>
  )
}

export default NotFound
