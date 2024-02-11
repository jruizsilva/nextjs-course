import React from 'react';

interface ProfileProps{
    title: string;
}

const Profile = (props: ProfileProps) => {
    return (
        <>
            <div> Profile - works </div>
            <h1> { props.title } </h1>
        </>  
    )
}

export default Profile
