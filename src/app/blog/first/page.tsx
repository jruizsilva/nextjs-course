import React from 'react';

interface FirstProps{
    title: string;
}

const First = (props: FirstProps) => {
    return (
        <>
            <div> First - works </div>
            <h1> { props.title } </h1>
        </>  
    )
}

export default First
