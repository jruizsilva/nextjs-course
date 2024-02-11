import React from 'react';

interface SecondProps{
    title: string;
}

const Second = (props: SecondProps) => {
    return (
        <>
            <div> Second - works </div>
            <h1> { props.title } </h1>
        </>  
    )
}

export default Second
