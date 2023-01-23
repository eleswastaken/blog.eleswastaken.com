
export default function Header() {

    return(
        <header>
            <div className="wrapper">
                <div className="logo">
                    <a href="/">Eles</a>
                </div>
                <div className="nav-wrapper">
                    <nav>
                        <ul>
                            <li><a href="https://blog.eleswastaken.com/posts">Blog</a></li>
                            <li><a href="https://eleswastaken.com/contact">Contact</a></li>
                            <li><a href="https://eleswastaken.com/about">About</a></li>
                        </ul>
                    </nav>
                    <div className="social-media">
                        <ul>
                            <li><a target="_blank" href="https://twitter.com/elesismailov">Twitter</a></li>
                            <li><a target="_blank" href="https://www.youtube.com/@elesismailov/">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}