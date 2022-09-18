
const Navbar =()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand logo-anchor" href="a">Phone Store</a>
                <a className="navbar-brand " href="a"><img className="bag" src="https://img.icons8.com/ios/40/000000/shopping-bag--v1.png"/> 4</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="a">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">Iphone</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">Samsung</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">Otros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;