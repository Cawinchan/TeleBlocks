import { useState } from 'react'
import './Install.css'
import logo from './MetaMask_Fox.png'


const Install = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="Install">
        <header className="Install-header">
          <img src={logo} className="Install-logo" alt="logo" />
          <p> Follow the link to install 👇🏼</p>
          <a className="Install-link" href="https://metamask.io/download.html">Meta Mask</a>
        
        </header>
      </div>
  );
};

export default Install;