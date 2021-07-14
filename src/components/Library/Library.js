import React from 'react'
import LibrarySong from './LibrarySong/LibrarySong';
import './Library.scss';

const Library = ({songs, setCurrentSong, audioRef,  isPlaying, setSong, libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : '' }`}>
      <h2 className="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong 
            setSong={setSong}
            isPlaying={isPlaying}
            audioRef={audioRef}
            songs={songs}
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}/>
        })}
        
      </div>
    </div>
  )
}

export default Library;
