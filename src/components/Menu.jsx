import React from 'react'
import DealsCards from '../layouts/DealsCards'

import case1 from "../assets/case1.jpg"
import shoe1 from "../assets/shoe1.jpg"
import cap2 from "../assets/cap2.jpg"
import VR1 from "../assets/VR1.jpg"
import laptop1 from "../assets/laptop1.jpg"
import shoe2 from "../assets/shoe2.jpg"

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-10'>
        <h1 className='text-4xl text text-center lg:pt-8 pt-25 pb-10'>Our Products</h1>
         
        <div className='flex flex-wrap gap-10 justify-center'>
        
            <DealsCards img={case1} title="JBL Charge 5" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$9.9" />
            <DealsCards img={shoe1} title="JBL Charge 5" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" />
            <DealsCards img={cap2} title="JBL Charge 5" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$12" />
             <DealsCards img={VR1} title="IPHONE 14pro" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" />
            <DealsCards img={laptop1} title="IPHONE 13" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" />
            <DealsCards img={shoe2} title="IPHONE 12" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" /> 
        </div>
    </div>
  )
}

export default Menu