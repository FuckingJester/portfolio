import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import content from '../assets/creator.png'
import web from '../assets/web.png'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right' , 'spring',0.5 * 1.2, 0.74 )}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max :45,
          scale:1,
          speed:450,
        }}
        className='bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-[20px]'
        >
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <React.Fragment id='about' className='max-w-7xl mx-auto' >
      <motion.div variants={textVariant()}>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Introduction
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am Junior Front-End Developer experience with Javacript, TypeScript also using Frameworks such as React and a little bit Angular. I have an analytic mindset, I have a big passion to learn something new and become a part of something big in sphere of Development. Last 2 months I have worked with Low-Code paltform calls Funnelish, I created aproximately 10 funnels for E-Commerce products. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        <ServiceCard title={'Content Manager'} icon={content}/>
        <ServiceCard title={'Web Developer'} icon={web}/>
      </div>
    </React.Fragment>
  )
}

export default SectionWrapper(About, 'about')