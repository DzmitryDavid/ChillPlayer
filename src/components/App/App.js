import React, { useRef, useState } from 'react';
import Song from '../Song/Song';
import Player from '../Player/Player';
import data from '../data';
import Library from '../Library/Library';
import Nav from '../Nav/Nav';
import './App.scss';


const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false)
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const  animationPercentage = Math.round((roundCurrent / roundDuration) * 100);
    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage });
  };
  return (
    <div>
      <Nav
        setLibraryStatus={setLibraryStatus}
        libraryStatus={libraryStatus}/>
      <Song currentSong={currentSong} />
      <Player

        songInfo={songInfo} 
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        songs={songs}/>

        <Library 
          libraryStatus={libraryStatus}
          setSong={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          setCurrentSong={setCurrentSong}
          songs={songs}/>

        <audio
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}
        ></audio>
          
    </div>
  )
}
export default App;
