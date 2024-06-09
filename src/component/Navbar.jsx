import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
            <img src="https://booksdelivery.com/image/cache/catalog/logo/journal-logo-388x63.png" height="30"/>
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Add new book</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/view">view books</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  category
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Thriller</a></li>
                  <li><a className="dropdown-item" href="#">feel good</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/delete">Delete</a>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav><br/><br/>
    
    </div>
  )
}

export default Navbar