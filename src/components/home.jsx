import React from 'react'
import Buttons from '../layouts/Buttons'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat"> 
            <div className='w-full lg:w-2/3 space-y-5'>
                <h1 className='font-semibold text-4xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, quisquam!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ratione amet odio voluptates incidunt reprehenderit sint, cupiditate atque ut in?</p>
                <div className='lg:pl-0'>
                    <Buttons title='Order Now' />
                </div>
            </div>
        </div>
    )
}

export default Home