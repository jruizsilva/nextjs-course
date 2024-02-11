import React from 'react';

interface BlogProps{
    title: string;
}

const Blog = (props: BlogProps) => {
    return (
        <>
            <div> Blog - works </div>
            <h1> { props.title } </h1>
        </>  
    )
}

export default Blog
