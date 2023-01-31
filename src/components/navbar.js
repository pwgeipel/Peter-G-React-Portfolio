const Navbar = ({ view, setView }) => {

    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Peter Geipel's Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a 
                        onClick={() => setView('about')}
                        className={`nav-link ${view === 'about' ? 'active fw-bold' : ''}`} href="#"
                        >
                            <i className="bi bi-person-circle"></i> About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        onClick={() => setView('portfolio')}
                        className={`nav-link ${view === 'portfolio' ? 'active fw-bold' : ''}`} href="#"
                        >
                            <i className="bi bi-palette-fill"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        onClick={() => setView('contact')}
                        className={`nav-link ${view === 'contact' ? 'active fw-bold' : ''}`} href="#"
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        onClick={() => setView('resume')}
                        className={`nav-link ${view === 'resume' ? 'active fw-bold' : ''}`} href="#"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default Navbar