import React from 'react';

function Banner() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-lg-6">
            <img src="https://i6fiby.csb.app/Images/bannar-profile.png" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-6 align-self-center cont-1">
            <h1 id="ts1">Buy the Clothes</h1>
            <h1 id="ts2">for Winter</h1>
            <p>
                Winter Fashion is back with latest styles for this winter. Find <br />
                the clothes and jacket of your choice and get with 25% <br />
                discount. Offer valid just for 5 days.
            </p>
            <a href="/all-products">
                <button type="button" class="btn btn-primary buyb">
                    <i class="fa fa-shopping-cart"></i> BUY NOW
                </button>
            </a>
        </div>
    </div>
</div>


  );
}

export default Banner;
