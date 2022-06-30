import React from 'react'
import Img from '../assets/hshs.png'

const Contact = () => {
  return (
    <div className='flex flex-row bg-[#00AEEF] py-20 justify-between md:px-20 px-5 gap-9' id='contact'>
        <div className='text-white'>
            <h1 className='md:text-4xl text-xl font-bold'>Contact</h1>
                <div className='text-center'>
                    <img src={Img} alt="bird"/>
                    <p className='md:text-xl text-[10px]'>Want a website for your brand and business? I design what you desire....</p>
                </div>
            </div>
        <div>
        <form className='md:w-580 text-white pr-5'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="bg-[#81DAFB] rounded md:w-96 w-40 md:h-10"/>
                </div>
                <div className='flex flex-col pt-5'>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="bg-[#81DAFB] rounded md:w-96 w-40 md:h-10" aria-describedby="emailHelp" />
                </div>
                <div className='flex flex-col py-5'>
                    <label htmlFor="message">Message</label>
                    <textarea className="bg-[#81DAFB] rounded md:w-96 w-40 md:h-10" rows="5"></textarea>
                </div>
                <button type="submit" className='md:px-10 py-1 rounded-full shadow-[#242425] bg-white shadow-2xl md:w-96 w-40 md:h-10 text-black'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact