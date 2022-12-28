
export function Navigation({ cartCount }) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          Start Bootstrap
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                Home
              </li>
              <li className="nav-item">
                About
              </li>
              <li className="nav-item dropdown dropdown-toggle" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
                Shop
                <ul className="dropdown-menu">
                  <li className="dropdown-item">All Products</li>
                  <li><hr className="dropdown-divider"/></li>
                  <li className="dropdown-item">Popular Item</li>
                  <li className="dropdown-item">New Arrivals</li>
                </ul>
              </li>
            </ul>
            <button className="btn border border-dark"><i className="bi bi-cart-fill me-2"></i>Cart<span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span></button>
          </div>
        </div>
      </nav>
    </div>
  );
}
