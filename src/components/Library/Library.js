import React from 'react'
import LibrarySong from './LibrarySong';
import './Library.scss';

const Library = ({songs}) => {
  return (
    <div className="library">
      <h2 className="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong song={song}/>
        })}
        
      </div>
    </div>
  )
}

export default Library;
