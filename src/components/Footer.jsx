import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white rounded-t-3xl mt-10 md:mt-20'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                <div className='w-full md:w-1/4 space-y-5'>
                    <h1 className='font-semibold text-2xl'>Core</h1>
                    <p className='text-sm'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ullam culpa sunt, porro nam in?
                    </p>
                </div>
                <div >
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                    <nav className='flex flex-col gap-2'>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Home</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">About</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Products</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Testing</a>
                    </nav>

                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0 '>Products</h1>
                    <nav className='flex flex-col gap-2'>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Product 1</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Product 2</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Product 3</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Product 4</a>
                    </nav>

                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0 '>Contact Us</h1>
                    <nav className='flex flex-col gap-2'>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">core@gmail.com</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">+24 784 894 4823</a>


                    </nav>

                </div>
            </div>

            <div className='flex md:flex-row py-4 px-5 md:px-10 justify-between flex-col gap-y-3'>
                <div>
                    <p>
                        @copyright developed by
                        <span className='text-brightColor'>  Daniel</span> |
                        All rights reserved
                    </p>
                </div>
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                </div>
            </div>

        </div>
    )
}

export default Footer