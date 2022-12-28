import React from 'react'
import './portfolio.css'
import Awesome from '../../assets/awesomeSauce.jpg';
import Cheat from '../../assets/cheatsheet.png';
import Wheel from '../../assets/color-wheel-icon.svg'
import Freedom from '../../assets/freedomsCost.jpg'

const Portfolio = () => {
  return (
    <div id='portfolio' className='pt-5 mx-5'>
        <h2>Portfolio</h2>
        <div className='d-flex flex-wrap'>
            <img className='pImg' src={Awesome} alt="" />
            <img className='pImg' src={Cheat} alt="" />
            <img className='pImg' src={Wheel} alt="" />
            <img className='pImg' src={Freedom} alt="" />
        </div>
    </div>
  )
}

export default Portfolio