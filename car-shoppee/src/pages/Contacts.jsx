import React from 'react'
import NavBar from '../components/NavBar'

function Contacts() {
  return (
    <div>
    <NavBar />
            <form class="row g-3 mt-4 row justify-content-center">
        <div class="col-md-5">
            <label for="inputEmail4" class="form-label"><h1>Contact Us</h1></label>
            <input type="email" class="form-control" id="inputEmail4" placeholder='Email' />
        </div>
        <span />
        <div class="col-md-5">
            <input type="password" class="form-control mt-20" id="inputPassword4" placeholder='Password'/>
        </div>
        <span />
        <div className='col-md-5'>
        <div class="input-group">
        <textarea class="form-control" aria-label="With textarea" placeholder='Your Message Please Senpai'></textarea>
        </div>
        <div class="col-5 mt-3">
        <button type="submit" class="btn btn-primary">Send Message</button>
        </div>
        </div>
        </form>
    </div>
    
  )
}

export default Contacts