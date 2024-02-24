import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Electropage() {

    let [elec, updateElec] = useState([])


    useEffect(()=>{

        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(data=>updateElec(data))


    },[])



  return (
    <>
<div class="container mt-5">
    <h1 id="h1" class="text-danger text-center">
        Electronics
    </h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4  py-5">
        {elec.map((p) =>
        <div class="col">
            <Link to={`/product/${p.id}`}>
            <div class="card size mt-5">
                <img src={p.image} class="card-img-top photo my-5" alt="..." />
                <div class="card-body">
                    <h5 class="card-title font">{p.title}</h5>
                    <p class="card-text">
                        {p.description}
                    </p>
                </div>
                <div class="card-footer">
                    <div>
                        <h4 class="price-text-style text-center text-danger text-decoration-underline mb-3">Rs {p.price}</h4>
                    </div>
                    <div>
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
</div>



    </>
  )
}

export default Electropage