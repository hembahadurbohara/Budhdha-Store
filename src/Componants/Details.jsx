import React from 'react';

function Details() {
  return (
    <>
    
    <div className="text-bg-secondary p-5">
      <div className="container">
        <div className="row">

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item rounded-4 text-bg-danger pt-4">
              <div className="p-4">
                <div className="logo text-center text-light fs-1 mb-5"><i className="far fa-smile"></i></div>
                <h1 className='text-center mb-4'>Happy Customers</h1>
                <p className='text-center'>We have 10000+ Happy and Satisfied Customers</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item rounded-4 text-bg-danger pt-4">
              <div className="p-4">
                <div className="logo text-center fs-1 mb-5"><i className="fas fa-shopping-cart"></i></div>
                <h1 className='text-center mb-4'>easy return</h1>
                <p className='text-center'>Enjoy worry-free shopping with our easy return policy</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item rounded-4 text-bg-danger pt-4">
              <div className="p-4">
                <div className="logo text-center fs-1 mb-5"><i className="fas fa-handshake"></i></div>
                <h1 className='text-center mb-4'>Quality Products</h1>
                <p className='text-center'>We believe in delivering nothing less than the best</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="service-item rounded-4 text-bg-danger pt-4">
              <div className="p-4">
                <div className="logo text-center fs-1 mb-5"><i className="far fa-star"></i></div>
                <h1 className='text-center mb-4'>Trusted Products</h1>
                <p className='text-center'>Embrace peace of mind with our trusted products</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Details;
