
export default function Footer() {

    return(
        <footer className='main'>
            <div className="wrapper">

                <div className="logo">
                    <a href="/">
                      <div className="logo-wrapper">
                        <img src="/logo.png" alt="LS logo :D"/>             
                      </div>
                    </a>
                </div>

                <p className='f'>Take responsibility over your life.</p>
                <p className='s'>
                  Just trying to level up.
                  <br />
                  With the people I care about.
                </p>

                <div className="nav-wrapper">
                    <nav className="social-media">
                        <ul>
                            <li>
                              <a target="_blank" href="https://twitter.com/elesismailov">
                                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg" alt='my twitter'>
                                <path d="M24.2247 5.48279C24.2418 5.72341 24.2418 5.96407 24.2418 6.20469C24.2418 13.5437 18.6739 22 8.49749 22C5.36232 22 2.44989 21.089 0 19.5078C0.445449 19.5594 0.873707 19.5766 1.33629 19.5766C3.92319 19.5766 6.30458 18.7 8.20624 17.2047C5.77349 17.1531 3.73477 15.5547 3.03234 13.3547C3.37501 13.4062 3.71763 13.4406 4.07744 13.4406C4.57425 13.4406 5.07112 13.3718 5.53365 13.2516C2.99812 12.7359 1.0964 10.5016 1.0964 7.80312V7.73439C1.83305 8.14689 2.68973 8.4047 3.59766 8.43904C2.10717 7.44214 1.13068 5.7406 1.13068 3.81559C1.13068 2.78436 1.40474 1.83904 1.88447 1.01404C4.60848 4.38278 8.70305 6.58275 13.2944 6.82341C13.2087 6.41091 13.1573 5.98127 13.1573 5.55157C13.1573 2.49216 15.6244 0 18.691 0C20.2843 0 21.7233 0.670311 22.7341 1.75312C23.9847 1.51251 25.184 1.04843 26.2462 0.412503C25.835 1.70159 24.9613 2.78441 23.8135 3.47186C24.9271 3.35161 26.0064 3.04216 27 2.61252C26.2463 3.71247 25.304 4.69212 24.2247 5.48279Z" fill="#fff"/>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="https://www.youtube.com/@elesismailov/">
                                <svg width="28" height="20" viewBox="0 0 548 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M535.655 60.083C529.374 36.433 510.868 17.807 487.371 11.486C444.781 0 274 0 274 0C274 0 103.22 0 60.6291 11.486C37.1321 17.808 18.6261 36.433 12.3451 60.083C0.933105 102.95 0.933105 192.388 0.933105 192.388C0.933105 192.388 0.933105 281.826 12.3451 324.693C18.6261 348.343 37.1321 366.193 60.6291 372.514C103.22 384 274 384 274 384C274 384 444.78 384 487.371 372.514C510.868 366.193 529.374 348.343 535.655 324.693C547.067 281.826 547.067 192.388 547.067 192.388C547.067 192.388 547.067 102.95 535.655 60.083ZM218.145 273.591V111.185L360.884 192.39L218.145 273.591Z" fill="#fff"/>
                                </svg>
                              </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className='nav-links'>
                        <ul>
                            <li><a href="/story/coding">Coding</a></li>
                            <li><a href="#">Back to Top</a></li>
                        </ul>
                    </nav>
                </div>


            </div>
            <p className='attribution'>
              Eles Ismailov
              <br />
              2022-Present
            </p>
        </footer>
    )
}
