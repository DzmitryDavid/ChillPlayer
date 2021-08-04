import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import './Player.scss';

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setSongs }) => {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const activeLibraryHandler = (nextPrev) => {
    const newSetSong = songs.map((track) => {
      if(track.id === nextPrev.id) {
        return {...track, active: true}
      } else {
        return {
          ...track, active: false
        }
      }
    });
      setSongs(newSetSong)
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const getTime = (time) => {
    return `${Math.floor(time / 60)} : ${('0' + Math.floor(time % 60)).slice(
      -2
    )}`;
  };
  const skipTrackHandler = async (action) => {
    const currentIndex = songs.findIndex((track) => track.id === currentSong.id);
    
    if(action === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    }
    if(action === 'skip-back') {
      if((currentIndex - 1 % songs.length) === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeLibraryHandler(songs[songs.length - 1])
        if(isPlaying) { audioRef.current.play() }
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
    }
    if(isPlaying) { audioRef.current.play() }
  }
  

  const trackAnimation ={transform: `translateX(${songInfo.animationPercentage}%)`} 

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}}
          className="track">
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime }
          onChange={dragHandler}
        />
        <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration): '0:00'}</p> 
      </div>
      <div className="play-control">

        <FontAwesomeIcon 
          className="skip-back"
          onClick={() => skipTrackHandler('skip-back')}
          size="2x" 
          icon={faAngleLeft} />
        
          <FontAwesomeIcon
            className="play"
            size="2x"
            icon={isPlaying ? faPause: faPlay}
            onClick={playSongHandler}
          />

        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
