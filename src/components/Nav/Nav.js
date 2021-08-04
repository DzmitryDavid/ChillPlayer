import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

const Nav = ({libraryStatus, setLibraryStatus}) => {

  const libraryStatusHandler = () => {
    setLibraryStatus(!libraryStatus)
  }
  
  return (
    <nav className="nav">
      <h1>Chill Player</h1>
      <button onClick={libraryStatusHandler}>
        <span>Library</span>
        <FontAwesomeIcon icon={faMusic}/>
      </button>
    </nav>
  )
}

export default Nav;
