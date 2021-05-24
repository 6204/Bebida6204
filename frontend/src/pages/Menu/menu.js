import logo from '../../assets/logo.svg';
import '../../App.css';
import React from 'react'
import { useUser } from '../../contexts/User'

function Menu() {
  const { user } = useUser()
  console.log(user)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js and assets</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.token}
        </a>
      </header>
    </div>
  );
}

export default Menu;