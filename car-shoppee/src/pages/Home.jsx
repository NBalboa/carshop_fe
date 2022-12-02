import React from 'react'
import { useState } from 'react'
import Product1 from '../assets/img/car-1.webp'
import Product2 from '../assets/img/car-2.jpeg'
import Product3 from '../assets/img/car-3.jpg'
import Brand1 from '../assets/img/brand-1.png'
import Brand2 from '../assets/img/brand-2.png'
import Brand3 from '../assets/img/brand-3.png'
import Brand4 from '../assets/img/brand-4.png'
import Brand5 from '../assets/img/brand-5.png'
import Cards from '../components/Cards'
import Product from '../components/Product'
import NavBar from '../components/NavBar'

function Home() {
    return (

        <div>
            <NavBar />
            <div id='carouselHighlightedProducts' className='carousel slide m-4' data-bs-ride="true">
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target="#carouselHighlightedProducts" data-bs-slide-to='0' className='active' aria-current="true" aria-label="First Slide"></button>
                    <button type='button' data-bs-target="#carouselHighlightedProducts" data-bs-slide-to='1' aria-label="Slide 2"></button>
                    <button type='button' data-bs-target="#carouselHighlightedProducts" data-bs-slide-to='2' aria-label="Slide 3"></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active '>
                        <img src={Product1} className='w-100' height="400" alt='Product'></img>
                    </div>
                    <div className='carousel-item active '>
                        <img src={Product2} className='w-100' height="400" alt='Product'></img>
                    </div>
                    <div className='carousel-item active '>
                        <img src={Product3} className='w-100 ' height="400" alt='Product'></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselHighlightedProducts" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselHighlightedProducts" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container-lg mb-5'>
                <h1 className='text-dark'>Brands</h1>
                <div className='card-group mt-2'>
                    <Cards image={Brand1} />
                    <Cards image={Brand2} />
                    <Cards image={Brand3} />
                    <Cards image={Brand4} />
                    <Cards image={Brand5} />
                </div>
            </div>
            <div className='container-lg mb-5'>
                <h1>Featured Products</h1>
                <div className='row gap-3'>
                    <Product image={Product1} />
                    <Product image={Product1} />
                    <Product image={Product1} />
                    <Product image={Product1} />
                    <Product image={Product1} />
                    <Product image={Product1}/>
                </div>

            </div>
        </div>
    )
}

export default Home