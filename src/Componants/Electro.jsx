import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Electro() {

    let [elec, updateElec] = useState([])


    useEffect(()=>{

        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(data=>updateElec(data.slice(0, 4)))


    },[])



  return (
    <>

<div className="container mt-5">
    <h1 id="h1" className="text-danger ">Electronics</h1>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {elec.map((p) =>
            <div className="col">
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
    <div className="button">
        <a className="btn btn-primary mt-5" href="/electronics" role="button">See More</a>
    </div>
</div>




    </>
  )
}

export default Electro
