import React from 'react'
import './navbar.css'
import logo from '../../assets/logo1.png'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <>  <nav class="navbar navbar-expand-lg Nav-main">
  <div className="container">
    <a class="logo" href="#">
    <img src={logo} alt="" className='img-fluid'/>

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" 
      aria-label="Toggle navigation">
      <CiMenuFries className='icon-menu' />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" data-aos="fade-up"
                data-aos-duration="1000" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-aos="fade-up"
                          data-aos-duration="1500" href="#">About Us</a>
        </li>
          
        <li className="nav-item">
          <a className="nav-link" data-aos="fade-up"
     data-aos-duration="2000" href="#">Program</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-aos="fade-up"
     data-aos-duration="2500" href="#">MemberShip</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-aos="fade-up"
     data-aos-duration="3000" href="#">Testimonials</a>
        </li>
      </ul>
      <form className="d-flex ms-md-4" role='serch'>
      

        <button className="btn1" type="submit" data-aos="fade-up"
     data-aos-duration="3500">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
