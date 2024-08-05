import React from 'react'

const Buttons = (props) => {
    return (
        <div>
            <button className='px-6 py-3 border-2 border-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full'>
                {props.title}
            </button>
        </div>
    )
}

export default Buttons