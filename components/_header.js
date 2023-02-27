'use client';

import { useState } from 'react';


export default function Header() {

  const [isOpen, setOpen] = useState(false);

  console.log(isOpen)

  console.log('hehllofadj')
    return(
        <header>
            <div className="wrapper">
                <div className="logo">
                    <a href="/">
                      <div className="logo-wrapper">
                        <img src="/logo.png" alt="LS logo :D"/>             
                      </div>
                    </a>
                </div>

                <div className="nav-wrapper">
                    <nav className='nav-links'>
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                    <nav className="social-media">
                        <ul>
                            <li><a target="_blank" href="https://twitter.com/elesismailov">Twitter</a></li>
                            <li><a target="_blank" href="https://www.youtube.com/@elesismailov/">YouTube</a></li>
                        </ul>
                    </nav>
                </div>

                <Button />

            </div>
        </header>
    )
}


function Button() {
  return (
    <button onClick={ () => {setOpen(!isOpen)} } className="mobile-menu">
      M
    </button>
  )
}





