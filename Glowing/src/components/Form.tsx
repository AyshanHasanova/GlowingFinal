import React from 'react'

const Form:React.FC = () => {
  return (
    <section className="form-container">
    <h2>Sent A Message</h2>
    <form action="#" method="post">
        <div className="email-name">
              <div className="mb-3">
              <input type="text" name="name" placeholder="Name*" required/>
              <p className='text-danger small'>Ad sahəsi tələb olunur</p>
              </div>
           
            <div className="mb-3">
            <input type="email" name="email" placeholder="Email*" required/>
            <p className='text-danger small' >Email sahəsi tələb olubur</p>
            </div>
          
        </div>
         <div className="mb-2">
         <textarea name="message" placeholder="Messenger" required></textarea>
         <p className='text-danger small'>Mesaj sahəsi tələb olunur</p>
         </div>
      
        <button type="submit">Submit</button>
    </form>
   </section>
  )
}

export default Form