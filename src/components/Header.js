function Header() {
    return (
        <header className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#azmenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="azmenu" className="collapse navbar-collapse">
                    <div className="navbar-nav menu__left">
                        <a href="/" className="brand">
                            <img src={require('../logo.png')}/>                            
                        </a>
                    </div>
                    {/* <a href="/">Home</a> */}
                    <div className="right__menu">
                        <a href="/about" className="me-lg-3">About</a>
                        <a href="/work" className="me-lg-3">Work</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;