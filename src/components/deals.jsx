import React, {useState} from 'react'
import DealsCards from '../layouts/DealsCards'
import jbl2 from "../assets/jbl2.jpg"
import jbl1 from "../assets/jbl1.jpg"
import jbl3 from "../assets/jbl3.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Deals = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-10 py-16'>
        <h1 className='text-4xl text text-center pt-15 pb-10'>Hot Deals</h1>
         
        <div className='flex flex-wrap gap-10 justify-center hover: transition-transform ease-in-out'>
          {/* <Slider {...settings}> */}
            <DealsCards img={jbl2} title="JBL Charge 5" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$9.9" />
            <DealsCards img={jbl1} title="JBL Charge 5" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" />
            <DealsCards img={jbl3} title="JBL Charge 5" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$12" />
        {/* </Slider> */}

            {/* <DealsCards img={img4} title="IPHONE 14pro" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" />
            <DealsCards img={img5} title="IPHONE 13" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" />
            <DealsCards img={img6} title="IPHONE 12" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit."  price="$299" /> */}
        </div>
    </div>
  )
}

export default Deals