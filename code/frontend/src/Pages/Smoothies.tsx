import React from 'react'
import Buy from '../components/Buy'
import smoothies from '../assets/smoothies.png'
import './smoothies.css'
export default function Smoothies() {
  return (
    <div className='smoothies-section'>

    {/* card */}
    <div className="smoothies-card-container">
    
    <div className="card card-1">
    <div className="card-img-container">
    <img src={smoothies} alt="smoothies image" />
    </div>
   
    <div className="card-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit
    </div>
  
    <Buy ></Buy>
    </div>
    <div className="card card-1">
    <div className="card-img-container">
    <img src={smoothies} alt="smoothies image" />
    </div>
    <div>
    <div className="card-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit
    </div>
    </div>
    <Buy></Buy>
    </div><div className="card card-1">
    <div className="card-img-container">
    <img src={smoothies} alt="smoothies image" />
    </div>
    <div>
    <div className="card-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit
    </div>
    </div>
    <Buy></Buy>
    </div>
    </div>
    
    </div>
  )
}
