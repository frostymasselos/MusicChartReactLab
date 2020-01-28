import React, { Component } from 'react';
import './App.css';
import MusicBox from './container/MusicBox'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs}))
      .catch(err => console.err());
  }

  render(){
    return (
      <MusicBox />
    );
  }
}

export default App;
