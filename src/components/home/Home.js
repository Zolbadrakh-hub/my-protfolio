import React from 'react'
import { BsFacebook, BsInstagram,  } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id='home' className='mt-20'>
        <div className='box-border h-180 w-300 p-4 mx-20 border-2 bg-[#f7f7f7] pt-20 shadow-inner'>
            <div className='text-center'>
                <h1 className='md:text-4xl text-xl'>Hello,</h1>
                <h1 className='md:text-4xl text-1xl'>I am <span className='font-bold'>Zolbadrakh AMARSAIKHAN</span></h1>
                <p className='md:text-4xl text-md text-[#696969]'>Web Designer/Developer</p>
            <div className='md:space-x-24 space-x-2 pt-20 pb-32 text-sm'>
            <Link to='contact' className='md:px-20 px-5 py-2 rounded-full shadow-[#242425] bg-white shadow-2xl cursor-pointer hover:bg-[#f7f7f7]'>
                Contact
            </Link>
            <Link to='skills' className='md:px-20 px-8 text-white py-2 rounded-full shadow-[#242425] bg-white shadow-2xl bg-[#00AEEF] cursor-pointer hover:bg-[#0399D0]'>
                    Skills
            </Link>
            </div>
                <div className='flex flex-row md:gap-5 gap-2 justify-end' >
                    <a href='https://www.facebook.com/rainwons/'><BsFacebook size={30}/></a>
                    <a href='https://www.instagram.com/zoloi.zo/'><BsInstagram size={30}/></a>
                    <a href='https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSKkVQBqLkSTVKnbZfJRStLZnmgrbBHWLTdLvPLZCsxWTgRphzcqgpBwJgqhTVPkLqFTmXvb' ><AiOutlineMail size={30}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home