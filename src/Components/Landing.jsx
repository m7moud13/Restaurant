import React from 'react'

export const Landing = () => {
    return (
        <div className='max-w-[1600px]  relative text-white mx-auto'>
            <div className='m-4 relative'>
                <img 
            src="https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className='w-full object-cover max-h-[600px]  -z-10 after:bg-black/70 after:w-full after:h-full after:top-0 after:z-10'
            alt="" />
            <span className=' absolute top-0 left-0 w-full  h-full bg-black/30 z-10'></span>
            </div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl absolute z-30 top-[50%] translate-y-[-50%] left-10  block'>The <span className=' text-orange-500'>Best</span></h1>
            <h1 className=' text-orange-500 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl absolute z-30 top-[60%] translate-y-[-50%] left-10  block'>Foods <span className='text-white'>Devlivered</span></h1>
        </div>
    )
}
