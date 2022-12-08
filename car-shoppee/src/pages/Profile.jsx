import React from 'react'
import img from "../assets/img/download.jpg"

function Profile() {
  return (
    <div style={{backgroundColor: 'bisque',padding: 80}}>
    <div className="container text-center mt-5 border border-dark p-3 shadow-lg p-3 mb-5 bg-body rounded" >
    <div className="row">   
        <div className="col-5 col-lg-3 mx-auto">
            <img src= {img} alt="" style={{textShadow: 2}} className="float-xxl-start rounded shadow p-3 mb-5 bg-body rounded me-5" />
        </div>
        <div className="col-7">
            <p className='text-start h3 fw-bold font-monospace'>Name: <strong className='h5 font-monospace'>Nicko Senpai</strong></p>
            <p className='text-start h3 fw-bold font-monospace'>Email: <strong className='h5 font-monospace'>pornhub@gmail.com</strong></p>
            <p className='text-start h3 fw-bold font-monospace'>Contact Number: <strong className='h5 font-monospace'>09876543210</strong></p>
            <p className='text-start h3 fw-bold font-monospace'>Address: <strong className='h5 font-monospace'>Brgy. Madasigon, Bulatok Molave ZDS</strong></p>
        </div>
        </div>
    </div>
        <div className="col-12 text-end mt-3">
            <button type="submit" class="btn btn-danger">BACK</button>
        </div>
    </div>
  ) 
}

export default Profile