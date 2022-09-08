import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
    
    return (
        <div className={styles.mynavbar}>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {/* Home */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        
                        {/* Projects */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/project_top">"The Odin Project"</a></li>
                                <li><a className="dropdown-item" href="/projects_react_nextjs">react/next.js-Projects</a></li>
                                {/* <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">Something....</a></li> */}
                            </ul>
                        </li>

                        {/* About */}
                        <li className="nav-item">
                            <a className="nav-link about" href="/about">About</a>
                        </li>

                        {/* Contact */}
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>

                        {/* Settings */}
                        <li className="nav-item">
                            <a className="nav-link" href="/settings">Settings</a>
                        </li>

                    </ul>


                    {/* Searchbar */}
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    </div>
                </div>
            </nav>

        </div>
    )
} 
