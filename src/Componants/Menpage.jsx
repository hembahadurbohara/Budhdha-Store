import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Menpage() {

    let [elec, updateElec] = useState([])


    useEffect(()=>{

        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(data=>updateElec(data))


    },[])



  return (
    <>

<div className="container mt-5">
    <h1 id="h1" className="text-danger text-center">
        MEN'S CLOTHING
    </h1>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {elec.map((p) =>
            <div className="col">
                <Link to={`/product/${p.id}`}>
                <div className="card size mt-5">
                    <img src={p.image} className="card-img-top photo my-5" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font">{p.title}</h5>
                        
                    </div>
                    <div className="card-footer">
                        <div>
                            <h4 className="price-text-style text-center text-danger text-decoration-underline mb-3">Rs {p.price}</h4>
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
</div>


    </>
  )
}

export default Menpage