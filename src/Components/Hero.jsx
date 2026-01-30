import React from 'react'

const Hero = (props) => {
    return (
        <div className=' bg-[#e7ddbc] font-bold text-7xl h-80 flex items-center justify-center'>{props.name}</div>
    )
}

export default Hero