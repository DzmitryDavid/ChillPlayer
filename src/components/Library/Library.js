import React from 'react'
import LibrarySong from './LibrarySong';
import './Library.scss';

const Library = ({songs, setCurrentSong}) => {
  return (
    <div className="library">
      <h2 className="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong 
            songs={songs}
            key={song.id}
            setCurrentSong={setCurrentSong}
            id={song.id}
            song={song}/>
        })}
        
      </div>
    </div>
  )
}

export default Library;
