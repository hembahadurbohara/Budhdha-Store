import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Product() {

  let [product, updateProduct] = useState([])
  let { pID } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${pID}`)
      .then(res => res.json())
      .then(json => updateProduct(json))
  }, [])

return (
<>
    
  <div className="container border my-5">
  
  <div className="row my-5">
  
    <div className="col-md-6 d-flex justify-content-center my-1">
      <img className="photo1 img-fluid" src={product.image} alt />
    </div>
    <div className="col-md-6   align-self-center">
      <h2 className="card-title font pb-4">{product.title}</h2>
      <p className="card-text">{product.description}</p>
      <p className="card-text fo">Price Rs: <span> {product.price} </span></p>
      <p className="card-text">Category: {product.category} </p>
      <div className="d-flex gap-3 py-5">
        <button type="button" className="btn btn-primary buyb">
          <i className="fa fa-shopping-cart" /> BUY NOW
        </button>
        <button type="button" className="btn btn-primary">
          <i className="fa fa-shopping-cart" /> Add To Cart
        </button>
      </div>
    </div>
    
  </div>
  
</div>
    </>
  )
}

export default Product