import React,{useState} from 'react'
import Logo from '../assets/img/Logo.png'
 

function Sidebar() {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        <div className='sidebar'>
        <a href="#" class="brand-link">
            <img src={Logo} alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{opacity: .8}}/>
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        </div>  
    </aside>
  )
}

export default Sidebar