import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const Links = [
    {name: "Home", link:"home"},
    {name: "About", link:"about"},
    {name: "Skills", link:"skills"},
    {name: "Contact", link:"contact"},
]
  const [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 bg-white md:px-10 px-7'>
          <div className='text-2xl text-[#00AEEF] font-bold cursor-pointer flex items-center font-[Poppins]'>
          Welcome
          </div>
          <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <GiHamburgerMenu name={open ? 'close':'menu'}></GiHamburgerMenu>
        </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100': 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {Links.map((link) => (
              <li className='cursor-pointer hover:text-[#0399D0] duration-500 '>
              <Link key={link.name} className=' md:ml-8 text-xl md:my-0 my-7' to={link.link} smooth={true} duration={1000}>
               {link.name}
                </Link>
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Navbar