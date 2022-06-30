import React from 'react'

const About = () => {
  return (
    <>
    <div className='md:px-20 px-1 md:py-20 py-5 flex flex-row justify-around text-center' id='about'>
        <div>
            <h1 className='md:text-4xl text-xl font-bold'>
                2+
            </h1>
            <p className='text-[#c4c4c4] text-[9px]'>Projects Completed</p>
        </div>
        <div>
            <h1 className='md:text-4xl text-xl font-bold'>
                5+
            </h1>
            <p className='text-[#c4c4c4] text-[9px]'>Github Repository</p>
        </div>
        <div>
            <h1 className='md:text-4xl text-xl font-bold'>
                1+
            </h1>
            <p className='text-[#c4c4c4] text-[9px]'>Years of experience</p>
        </div>
    </div>
    <div className='bg-[#00688F] text-white py-28 px-20'>
            <h1 className='md:text-4xl text-2xl font-bold pb-4 border-b-8 border-[#00AEEF] md:w-72'>About Me...</h1>
            <p className='pt-16 md:text-lg text-sm'> Hello, My name is Zolbadrakh. </p>
                <p className='md:text-lg text-sm'> I am a Software Enginer Undergraduate at National University of Mongolia. </p>
                <p className='md:text-lg text-sm pb-8'> I’m currently learning UI/UX development. Checkout my projects on github and behance. <a href='https://github.com/Zolbadrakh-hub' className='text-[#00AEEF]'>https://github.com/Zolbadrakh-hub</a> </p>
        </div>
    </>
  )
}

export default About