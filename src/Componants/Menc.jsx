import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Menc() {

    let [elec, updateElec] = useState([])


    useEffect(()=>{

        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(data=>updateElec(data.slice(0, 4)))


    },[])



  return (
    <>

<div className="container mt-5">
        <h1 id="h1" className="text-danger  ">MEN'S CLOTHING</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-lg-4 g-4 py-5">

            {elec.map((p)=>

          <div className="col">
            <Link to={`/product/${p.id}`}>
              <div class="card size mt-5">
                <img src={p.image} class="card-img-top photo my-5" alt="..." />
                <div class="card-body">
                    <h5 class="card-title font">{p.title}</h5>
                    
                </div>
                <div class="card-footer">
                    <div>
                        <h4 class="price-text-style text-center text-danger text-decoration-underline mb-3">Rs {p.price}</h4>
                    </div>
                    <div className="text-center pb-3">
                    <button type="button" class="btn btn-primary buyb">
                            <i class="fa fa-shopping-cart"></i> BUY NOW
                        </button>
                        </div>
                </div>
            </div>
            </Link>
          </div>
          )}


          </div>
          <div className="button">
         <a class="btn btn-primary text-center mt-5" href="/men's clothes" role="button">See More</a>
         </div>
          </div>




    </>
  )
}

export default Menc
