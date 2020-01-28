import React from 'react';

const Songs = (props) =>{
    return(
        <>
            <p>Chart Position: {props.position}</p>
            <p>Song name: {props.song['im:name'].label}</p>
            <p>Artist: {props.song['im:artist'].label}</p>
        </>

    )
}

export default Songs;