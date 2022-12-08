import React, { useEffect } from 'react'
import { useState } from 'react'
import Brand1 from '../assets/img/headlight.jpg'
import Brand2 from '../assets/img/light.jpg'
import Brand3 from '../assets/img/mirror.jpg'
import Brand4 from '../assets/img/steeringwheel.jpg'
import Brand5 from '../assets/img/door.jpeg'
import Brand6 from '../assets/img/handle.jpg'
import Cards from '../components/Cards'
import Product from '../components/Product'
import NavBar from '../components/NavBar'
import p1 from '../assets/img/p1.jpg'
import p2 from '../assets/img/carousel.jpg'
import p3 from '../assets/img/c1.jpg'
import b1 from '../assets/img/b1.png'
import b2 from '../assets/img/b2.jpg'
import b4 from '../assets/img/b4.jpg'
import axios from 'axios'
import Footer from '../components/Footer'

function Home() {
   
    const [data, setData] = useState([])

    const handleData = async function() {
        const {data} = await axios.get("http://localhost:3000/api/product/")
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        handleData()
    },[])


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
                        <img src={p1} className='w-100' height="500" alt='honda'></img>
                    </div>
                    <div className='carousel-item active '>
                        <img src={p2} className='w-100' height="500" alt='suzuki'></img>
                    </div>
                    <div className='carousel-item active '>
                        <img src={p3} className='w-100 ' height="500" alt='forrd'></img>
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
                    <Cards image={b1} />
                    <Cards image={b2} />
                    <Cards image={b4} />
                    
                </div>
            </div>
            <div className='container-lg mb-5'>
                <h1>Featured Products</h1>
                <div className='row gap-3'>
                {data.map(item => <Product key={item.id} product={item}/>)}
                </div>

            </div>
            
            <Footer />
        </div>
    )
}

export default Home