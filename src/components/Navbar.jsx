import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {menu,close} from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='z-20 px-6 w-full py-5 bg-primary'>
      <div className='w-full max-w-7xl flex items-center justify-between mx-auto'>
          <Link 
          className='w-[70%] sm:w-full hover:text-gray-400 cursor-pointer text-xl font-bold' 
          to={'/'} 
          onClick={() => {
              setActive('')
              window.scrollTo(0,0)
          }}>
            <h1 className=''>Dima Belenok | Web Dev</h1>
          </Link>
          <nav className='hidden sm:flex flex-row gap-10'>
            <a className='hover:text-gray-400 cursor-pointer' href='#about' >About</a>
            <a className='hover:text-gray-400 cursor-pointer' href='#work' >Work</a>
            <a className='hover:text-gray-400 cursor-pointer' href='#projects' >Projects</a>
          </nav>
          <div className='sm:hidden flex-1 flex justify-end items-center'>
            <img 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            src={toggle ? close : menu}
            onClick={() => {
              setToggle(!toggle)
            }}/>
            <div className={`${!toggle ? 'hidden' : 'flex'} black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] p-3 z-10 rounded-xl flex-col gap-3 items-start justify-end`}>
              <a 
              className='hover:text-gray-400 cursor-pointer text-[15px]' 
              onClick={() => {
                setToggle(!toggle)
              }} 
              href='#about'>About</a>
              <a 
              className='hover:text-gray-400 cursor-pointer text-[15px]' 
              onClick={() => {
                setToggle(!toggle)
              }} 
              href='#work'>Work</a>
              <a 
              className='hover:text-gray-400 cursor-pointer text-[15px]'
              onClick={() => {
                setToggle(!toggle)
              }} 
              href='#projects' >Projects</a>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Navbar