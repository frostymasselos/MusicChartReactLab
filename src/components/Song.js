import React from 'react';

const Songs = (props) =>{
    return(
        <>
            <p>{props.song['im:name'].label}</p>
            <p>{props.song['im:artist'].label}</p>
        </>

    )
}

export default Songs;