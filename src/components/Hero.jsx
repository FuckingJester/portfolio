import React from 'react'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'



const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div className='px-6 max-w-7xl flex flex-row absolute top-[60px] inset-0 items-start gap-5 mx-auto'>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-40 sm:h-80 violet-gradient rounded-full'/>
        </div>
        <div>
          <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
            Hi, I am <span className='text-[#915eff]'>Dima</span>
          </h1>
          <p className='font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100'>
            I develop Web Aplications and<br className='sm:block hidden'/> Low Code solutions for E-Commerce
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero