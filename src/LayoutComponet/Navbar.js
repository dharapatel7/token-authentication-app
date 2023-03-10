
import { Link } from 'react-router-dom';

function Navbar()
{
    return(<><nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
    <a className="navbar-brand" href="/Home">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to='/Home'>Home</Link> 
        </li>
        <li className="nav-item">
       <Link to='/Register' className="nav-link"> Register</Link>
        </li>
        <li className="nav-item">
        <Link to='/Login' className="nav-link">Login </Link>
        </li>
       
      </ul>
    </div>
  </nav></>)
}

export default Navbar;