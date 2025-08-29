import React from 'react'

const Title = ({ title, children }) => {
    return (

        <div className='inline-flex gap-2 items-center mb-3'>
            <p className='text-gray-500 text-3xl'>{title} </p>
            {children}
        </div>

    )
}

export default Title
