
export default function Menu(){
  const claseActiva = "active";
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          React Peliculas
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/generos"              >
                Generos
              </a>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  )
}