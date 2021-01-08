import React, { useState } from 'react'
import './Header.css'
import github from './github.png'
import linkdin from './linkdin.png'
import { useHistory } from 'react-router-dom'
import DescriptionIcon from '@material-ui/icons/Description'

function Header() {
  const [header, setHeader] = useState(false)

  const history = useHistory()

  const handleClick = () => {
    let path = '/resume'
    history.push(path)
  }
  const goHome = () => {
    let path = '/'
    history.push(path)
  }
  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <div className="Header">
      <div className={header ? 'Header__header active' : 'Header__header'}>
        <h1 onClick={goHome}>
          {' '}
          <strong>Hi, Im Walid</strong>
        </h1>

          <p>
            <strong>STRIVING TO GET 1% BETTER EVERY DAY</strong>
          </p>
        <div className="Header__icons">

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/walid-younis-2025/"
          >
            <button>
              {' '}
              <img className="links" src={linkdin} alt="linkdin" />
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/wyounis25"
          >
            <button>
              {' '}
              <img className="links" src={github} alt="github" />
            </button>
          </a>
          <button onClick={handleClick}>
            {' '}
            <DescriptionIcon className="resume" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
