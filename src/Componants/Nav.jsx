import React, { useEffect, useState } from 'react'

function Nav() {

  let[cat, updateCat]=useState([])
  // let [search, updateSearch]=useState('');
  // let filterData = cat.filter(fd=>fd.title.toLowerCase().includes(search))

  useEffect(()=>{

    


    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(d=>updateCat(d))
  },[])

  return (
   <>
  

   <nav className="navbar navbar-expand-lg text-bg-warning  sticky-top">
  <div className="container">
    <a className="navbar-brand text-primary b fw-bold" href="/">B<span>udhdha  </span>S<span>tore</span></a>

    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>


    <div className="sidebar offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">


      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title text-primary b" id="offcanvasNavbarLabel">B<span>udhdha  </span>S<span>tore</span></h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>


      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3    gap-3   ">
          <li className="nav-item">
            <a id='hover' className="nav-link active fw-bold" aria-current="page" href="/all-products"><i class="fa-solid fa-house"></i>ALL PRODUCTS</a>
          </li>

          <li className="nav-item">
            <a id='hover' className="nav-link active fw-bold" aria-current="page" href="/electronics"><i class="fa-solid fa-mobile-retro"></i> ELECTRONICS</a>
          </li>

          <li className="nav-item">
            <a id='hover' className="nav-link active fw-bold" aria-current="page" href="/jewelery"><i class="fa-solid fa-ring"></i> JEWELERY</a>
          </li>

          <li className="nav-item">
            <a id='hover' className="nav-link active fw-bold" aria-current="page" href="/men's clothes"><i class="fa-solid fa-person"></i> MEN'S CLOTHING</a>
          </li>

          <li className="nav-item">
            <a id='hover' className="nav-link active fw-bold" aria-current="page" href="/women's clothes"><i class="fa-solid fa-person-dress"></i>WOMEN'S CLOTHING</a>
          </li>



          {/* {filterData.map((c)=>
          <li className="nav-item">
            
            <a id='hover' className="nav-link active fw-bold " aria-current="page" href="#"> {c.toUpperCase()}</a>
           
          </li>
           )} */}
          
          
        </ul>
        <form className="d-flex  justify-content-center align-items-center" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>updateSearch(e.target.value)} />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>

   </>
  )
}

export default Nav