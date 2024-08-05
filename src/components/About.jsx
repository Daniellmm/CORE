import React from 'react'
import iphone5 from "../assets/iphone5.jpg"
import Buttons from '../layouts/Buttons'


const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center lg:px-32 px-5 mt-10'>
        <div><div className='bg-brightColor rounded-xl rounded-tl-[100px] rounded-br-[100px] px-10 py-20 mr-10'><img className='rounded-xl' src={iphone5} alt="img" /></div></div>
        <div className='space-y-4 lg:pt-14'>
            <h1 className='text-4xl text-center md:text-start'>
                Why Choose Us?
            </h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta earum nam aliquam corporis animi culpa laboriosam velit qui nostrum? Aperiam perferendis ipsum cumque laudantium vel. Placeat autem porro soluta labore officia, consequatur, accusamus velit saepe totam dolores omnis perferendis iure?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis tempore numquam quos obcaecati aspernatur architecto, iste quas recusandae? Ipsum, consequatur!</p>

            <div className='flex justify-center lg:justify-start'>
                <Buttons title="Read More" />
            </div>
        </div>
    </div>
  )
}

export default About