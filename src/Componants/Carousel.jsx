import React from 'react'

function Carousel() {
  return (
    <>


<div id="carouselExampleAutoplaying" className="carousel slide container mt-2" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://icms-image.slatic.net/images/ims-web/e4199745-86e6-4c78-af28-66cd7170fe41.jpg_1200x1200.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/5874af6a-b981-49eb-88de-9b8020693c9c.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/79a8f3e8-5140-4888-9fdb-6526e37b8943.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/cfdf125b-e92b-4f81-b46c-99ac6a8dae27.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>





    </>
  )
}

export default Carousel