import React from 'react'

interface DocsProps {
  title: string
  params: {
    slug: string[]
  }
}

const Docs = ({ title, params }: DocsProps) => {
  const { slug } = params
  const feature = slug[0]
  const concept = slug[1]

  if (slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {feature} and concept {concept}
      </h1>
    )
  }
  if (slug.length === 1) {
    return <h1>Viewing docs for feature {feature}</h1>
  }

  return (
    <>
      <div> Docs home page </div>
      <h1> {title} </h1>
    </>
  )
}

export default Docs
