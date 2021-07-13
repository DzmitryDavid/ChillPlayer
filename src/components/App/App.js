import React, { useState } from 'react';
import Song from '../Song/Song';
import Player from '../Player/Player';
import data from '../util';
import Library from '../Library/Library';
import './App.scss';


const App = () => {
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player 
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong} />

        <Library songs={songs}/>
    </div>
  )
}
export default App;
