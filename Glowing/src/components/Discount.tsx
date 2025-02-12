import React from 'react'

const Discount:React.FC = () => {
  return (
    <>
        <section className="discount py-5">
    <div className="container discount-card">


       <div className="discount-card1">
           <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/banner-01.jpg" alt=""/>
           <div className="text-overlay">
               <h6>NEW COLLECTION
               </h6>
                <h3>Intensive Glow  C+ <br/> Serum</h3>  
               <a href="#" className="explore-btn">Explore More</a>
           </div>
       </div>

       <div className="discount-card1">
           <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/banner-02.jpg" alt=""/>
           <div className="text-overlay">
               <h3>25% off Everything
               </h3>
                <p>Makeup with extended range in <br/>
                   colors for every human.</p> 
               <a href="#" className="explore-btn">Explore More</a>
           </div>
       </div>
    </div> 
         </section>
    </>

  )
}

export default Discount