import React from 'react'

interface AboutProps {
  title: string
}

const About = (props: AboutProps) => {
  return (
    <>
      <div className='hello'> About - works </div>
      <h1> {props.title} </h1>
    </>
  )
}

export default About
