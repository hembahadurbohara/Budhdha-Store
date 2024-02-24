import React from 'react';

function Banner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://i6fiby.csb.app/Images/bannar-profile.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 cont-1">
          <h1 id="ts1">Buy the Clothes</h1>
          <h1 id="ts2">for Winter</h1>
          <p>
            Winter Fashion is back with latest styles for this winter. Find <br />
            the clothes and jacket of your choice and get with 25% <br />
            discount. Offer valid just for 5 days.
          </p>
          <a href="/all-products"> <button type="button" className="btn btn-primary buyb"> 
            <i className="fa fa-shopping-cart"></i> BUY NOW
           </button></a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
