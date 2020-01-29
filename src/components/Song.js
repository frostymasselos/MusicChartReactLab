import React from 'react';

const Songs = (props) =>{
    return( /*All elements (that don't have children) should be self-closing*/
        <>
          <p> {props.position}. {props.song['im:name'].label}<br />
          {props.song['im:artist'].label}<br />
          <a href={props.song.link[1].attributes.href}>Preview</a><br />
          <img src={props.song['im:image'][2].label} alt="customized song"/><br />
          Genre: {props.song.category.attributes.term}
          </p>
        </>

    )
}

export default Songs;
