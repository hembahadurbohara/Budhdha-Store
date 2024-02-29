import React from 'react'

function Header() {
  return (
   <>

<nav class="navbar nav1 navbar-expand-lg bg-dark">
  <div class="container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <div class="nav-link active text-white" aria-current="page">Email: hbohara54@gmail.com</div>
        </li>
        <li class="nav-item">
          <div class="nav-link active text-white" aria-current="page">Contact No.: 9840046062</div>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#"><i class="fab fa-facebook"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#"><i class="fab fa-instagram"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#"><i class="fab fa-twitter"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#"><i class="fab fa-youtube"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


   </>
  )
}

export default Header

