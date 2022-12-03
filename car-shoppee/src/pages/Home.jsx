import React from 'react'
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
import datas from '../data/datas'
import honda from '../assets/img/honda.jpg'
import suzuki from '../assets/img/suzuki.jpg'
import forrd from '../assets/img/forrd.jpg'
import hondalogo from '../assets/img/fordlogo.jpg'
import suzukilogo from '../assets/img/suzukilogo.jpg'
import fordlogo from '../assets/img/fordlogo.jpg'
import {useDispatch} from "react-redux"

function Home() {
    const [items,setItem] = useState([
        {
            id: 1,
            name: "Headlight",
            price: 1000.00,
            path: Brand1 ,
            description: "A light with a reflector and special lens mounted on the front of a vehicle to illuminate the road ahead",
        },
        {
            id: 2,
            name: "BreakLight",
            price: 1000.00,
            path: Brand2 ,
            description: "A red light attached to the rear of a motor vehicle that lights up when the brakes are applied."
        },
        {
            id: 3,
            name: "Mirror",
            price: 1000.00,
            path: Brand3 ,
            description: "my description bitch",
        },
        {
            id: 4,
            name: "Steering Wheel",
            price: 1000.00,
            path: Brand4 ,
            description: "my description bitch",
        },
        {
            id: 5,
            name: "Door",
            price: 1000.00,
            path: Brand5 ,
            description: "my description bitch",
        },
        {
            id: 6,
            name: "Handle",
            price: 1000.00,
            path: Brand6 ,
            description: "my description bitch",
        }
    ])


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
                        <img src={honda} className='w-100' height="400" alt='honda'></img>
                    </div>
                    <div className='carousel-item active '>
                        <img src={suzuki} className='w-100' height="400" alt='suzuki'></img>
                    </div>
                    <div className='carousel-item active '>
                        <img src={forrd} className='w-100 ' height="400" alt='forrd'></img>
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
                    <Cards image={hondalogo} />
                    <Cards image={suzukilogo} />
                    <Cards image={fordlogo} />
                    <Cards image={suzukilogo} />
                    <Cards image={hondalogo} />
                </div>
            </div>
            <div className='container-lg mb-5'>
                <h1>Featured Products</h1>
                <div className='row gap-3'>
                {items.map(item => <Product key={item.id} product={item}/>)}
                </div>

            </div>
        </div>
    )
}

export default Home