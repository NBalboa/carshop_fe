import React from 'react'
import NavBar from '../components/NavBar'

function Contacts() {
  return (
    <div>
    <NavBar />
        <form className="row g-3 mt-4 row justify-content-center">
        <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label"><h1>Contact Us</h1></label>
            <input type="name" className="form-control" id="inputName4" placeholder='Your Name' />
        </div>
        <span />
          <div className="col-md-5">
              <input type="email" className="form-control mt-20" id="inputEmail" placeholder='Email'/>
          </div>
        <span />
        <div className='col-md-5'>
          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" placeholder='Your Message ' rows='10'></textarea>
          </div>
          <div className="col-5 mt-3">
            <button type="submit" className="btn btn-dark">Send Message</button>
          </div>
        </div>
        </form>
    </div>
    
  )
}

export default Contacts