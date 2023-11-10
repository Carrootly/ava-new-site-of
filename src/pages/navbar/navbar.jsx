import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <div className='position-dropdown'>

      <div class="dropdown">
        <Link to="/"><button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style= {{backgroundColor:'#34b259'}}>
          Home
        </button></Link>
      </div>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style= {{backgroundColor:'#34b259'}}>
          About us
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to="/history" className="dropdown-item" >AVA history</Link>
          <Link to = "/administration" className="dropdown-item" >Administration</Link>
          <Link to = "/teaching-staff" className="dropdown-item" >Teaching Staff</Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style= {{backgroundColor:'#34b259'}}>
          Education
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to = "/kindergarten" className="dropdown-item">Kindergarten</Link>
          <Link to = "/primary-school" className="dropdown-item" >Primary School</Link>
          <Link to = "/middle-school" className="dropdown-item">Middle School</Link>
          <Link to ="/high-school" className="dropdown-item">High School</Link>
          <Link to ="/#" className="dropdown-item">ESL</Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style= {{backgroundColor:'#34b259'}}>
          Schedule a visit
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to="/admission"className="dropdown-item">Come to AVA</Link>
      
        </div>
      </div>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style= {{backgroundColor:'#34b259'}}>
          Calendar
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style= {{backgroundColor:'#34b259'}}>
          Donations
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>

  );
}

export default NavBar;