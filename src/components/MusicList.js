import React from 'react';
import Song from './Song'

const MusicList = (props) => {
    const songs = props.songs.map( song => {
        return(
            <Song song={song} position={props.songs.indexOf(song) + 1}/>
        )
    })

    return(
        <>
            <h3>I am a music list component</h3>
            {songs}
        </>
    )
}

export default MusicList;