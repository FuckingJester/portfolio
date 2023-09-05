import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({title,companyName, date, text}) => {
  const formattedText = text.split('-').map((item, index) => {
    const trimmedItem = item.trim();
    if (trimmedItem) {
      // Добавляем <br> перед каждым элементом, кроме пустых строк
      return (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {'- ' + trimmedItem}
        </React.Fragment>
      );
    }
    return null; // Игнорируем пустые строки
  });

  return (
    <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={date}
    
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {companyName}
      </p>
    </div>

    <p className='mt-5 list-disc ml-5 space-y-2'>
      {formattedText}
    </p>
  </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div id='work' variants={textVariant()}>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
            <ExperienceCard 
            title={'Content Manager' } 
            date={'September 2022 - Now'} 
            companyName={'Mebli-24'} 
            text={`- Maintaining existing web application and fix bugs which appears - Fill the content of products cards - Set Gooogle Analytics, Google Tag Manager and make advertisments in Google Ads`}/>
            <ExperienceCard title={'Web Developer'} date={'August 2023 - Now'} companyName={'Ed-Hub'} text={'- Develop sites for E Commerce products - Translate it fot foreign GEO - Do A/B testing and choose more profit templates '} />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work")