import React from 'react'

function Header() {
  return (
   <>

<nav className="navbar nav1 navbar-expand-lg bg-dark">
  <div className="container">
    <div className="collapse navbar-collapse d-flex justify-content-between" >
      <ul className="navbar-nav ">
        <li className="nav-item">
          <div className="nav-link active text-white" aria-current="page">Email:hbohara54@gmail.com</div>
        </li>
        <li className="nav-item">
        <div className="nav-link active text-white" aria-current="page">Contact no. : 9840046062</div>
        </li>
      </ul>



      <ul className="navbar-nav ">
        <li className="nav-item">
        <a className="nav-link active text-white" aria-current="page" href="#"><i class="fa-brands fa-facebook"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active text-white" aria-current="page" href="#"><i class="fa-brands fa-instagram"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active text-white" aria-current="page" href="#"><i class="fa-brands fa-twitter"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active text-white" aria-current="page" href="#"><i class="fa-brands fa-youtube"></i></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}

export default Header

