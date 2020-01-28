import React, { Component } from 'react';
import MusicList from '../components/MusicList';

class MusicBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ songs: data.feed.entry }))
            .catch(err => console.err());
    }

    render() { 
        return ( 
            <MusicList songs={this.state.songs}/>
         );
    }
}
 
export default MusicBox;