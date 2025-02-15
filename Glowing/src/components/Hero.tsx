import React from 'react'
import Link from './Link'

const Hero:React.FC = () => {
  return (

    <section className="Hero">
    <div id="carouselExample" className="carousel slide">
<div className="carousel-inner">
  <div className="carousel-item active slide">
  <div className="slide-content " data-aos="fade-down">
            <h6>ESSENTIALS ITEMS</h6>
             <h2 >Be Your Kind of Beauty</h2>
            <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
            <Link linkIcindekiYazi = "Shop now"/>

          
        </div>
    <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-01.jpg" className="d-block w-100" alt="..."/>
  </div>
 
  <div className="carousel-item">
  <div className="slide-content">
            <h6>ESSENTIALS ITEMS</h6>
             <h2>Be Your Kind of Beauty</h2>
            <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
            <Link linkIcindekiYazi = "Shop now"/>

          
        </div>
    <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-02.jpg" className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
  <div className="slide-content">
            <h6>ESSENTIALS ITEMS</h6>
             <h2>Be Your Kind of Beauty</h2>
            <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
            <Link linkIcindekiYazi = "Shop now"/>

          
        </div>
    <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-03.jpg" className="d-block w-100" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
</section>
  
  )
}

export default Hero
