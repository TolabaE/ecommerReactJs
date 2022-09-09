
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
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Iphone
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="a">Iphone 7</a></li>
                                <li><a className="dropdown-item" href="a">Iphone 8</a></li>
                                <li><a className="dropdown-item" href="a">Iphone X</a></li>
                                <li><a className="dropdown-item" href="a">Iphone 11</a></li>
                                <li><a className="dropdown-item" href="a">Iphone 12</a></li>
                                <li><a className="dropdown-item" href="a">Iphone 13</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Samsung
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="a">Samsung A51</a></li>
                                <li><a className="dropdown-item" href="a">Samsung A71</a></li>
                                <li><a className="dropdown-item" href="a">Samsung A01</a></li>
                                <li><a className="dropdown-item" href="a">Samsung A32</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Otros
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="">Alcatel</a></li>
                                <li><a className="dropdown-item" href="">Xioami</a></li>
                                <li><a className="dropdown-item" href="">Motorola</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;