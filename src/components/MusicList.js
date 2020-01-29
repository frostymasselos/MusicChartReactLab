import React from 'react';
import Song from './Song'

const MusicList = (props) => {
    const songs = props.songs.map( song => {
        return(
            <Song className="item" song={song} position={props.songs.indexOf(song) + 1}/>
        )
    })

    return(
        <div className="container">
            {songs}
        </div>
    )
}

export default MusicList;
