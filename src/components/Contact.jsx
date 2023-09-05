import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h3>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>In Progress...(Email : dimon.belenok@gmail.com)</p>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");