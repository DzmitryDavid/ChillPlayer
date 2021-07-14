import React from 'react';
import './LibrarySong.scss';

const LibrarySong = ({ songs, song, setCurrentSong, audioRef, isPlaying, setSong }) => {

  const  selectSongHandler = async () => {
    await setCurrentSong(song);
    const newSetSong = songs.map((track) => {
      if(track.id === song.id) {
        return {...track, active: true}
      } else {
        return {
          ...track, active: false
        }
      }
    } );
    setSong(newSetSong);
    if(isPlaying) { audioRef.current.play() }
  }

  return (
    <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ''} `}>
      <img src={song.cover} alt="cover"/>
        <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    </div>
  )
}

export default LibrarySong
