import React from 'react'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import Buttons from './Buttons'


const DealsCards = (props) => {
  return (
    <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_5px_9px] rounded-xl'>
        <img className='rounded-xl' src={props.img} alt="img" />
        <div className='space-y-4'>
            <h3 className='text-center pt-6'>{props.title}</h3>
            {/* <p className='text-center pb-4'>{props.body}</p> */}
            <div className='flex flex-row justify-center '>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarHalf className='text-brightColor' />
            </div>
            <div className='flex flex-row justify-between items-center pt-2'>
                <h3 className='font-semibold'>{props.price}</h3>
                <Buttons title="Check Details" />
            </div>
        </div>
    </div>
  )
}

export default DealsCards