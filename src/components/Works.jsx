import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { beer,miracle,link,poliglu,interview,fuugu,novobudservice } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 1.2 * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${tag.name}`}
              className={`text-[14px] blue-text-gradient`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <React.Fragment >
      <motion.div id='projects' variants={textVariant()}>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        <ProjectCard 
          tags={[{name : 'react'},{name : 'zutand'},]}
          name={'Beer App'}
          image={beer}
          source_code_link={'https://beer-recipes-punk-api.netlify.app/'}
          description={'An app of beer recipes, which fetching from REST API. Recipes are loading when you scrolling down. You can see each recipes for such a path.'}/>
        <ProjectCard 
          tags={[{name : 'funnelish'},{name : 'low-code'},{name: 'css'},{name: 'js'},{name: 'swiper'}]}
          name={'Miracle'}
          image={miracle}
          source_code_link={'https://selecart.com/comforter/'}
          description={'I Web Application developed on Low-Code platform Funnelish, using JavaScript and some libraries. E-Commerce landing page which make a profit to my clients.'}/>
        <ProjectCard 
          tags={[{name : 'funnelish'},{name : 'low-code'},{name: 'js'},{name: 'css'}]}
          name={'Poliglu'}
          image={poliglu}
          source_code_link={'https://selecart.com/poliglu'}
          description={'A E-Commerce Web Site that bring our company aproximately 140 thousands UAH and over 1 million Tenge.'}/>
        <ProjectCard 
          tags={[{name : 'html'},{name : 'css'},{name: 'landing-page'}]}
          name={'Interview'}
          image={interview}
          source_code_link={'https://fuckingjester.github.io/interview/'}
          description={'A simple portfolio page for Photographer '}/>
        <ProjectCard 
          tags={[{name : 'low-code'},{name : 'only-mobile'},{name: 'js'},{name: 'funnelish'}]}
          name={'Fuugu'}
          image={fuugu}
          source_code_link={'https://selecart.com/fuugu/washer'}
          description={'E-Commerce funnel for business that buy products online'}/>
        <ProjectCard 
          tags={[{name : 'wordpress'},{name : 'multiple-pages'},{name: 'elementor'}]}
          name={'Novo Bud Service'}
          image={novobudservice}
          source_code_link={'https://novobudservice.com/'}
          description={'Multipage website for a construction company created on Wordpress'}/>
      </div>
    </React.Fragment>
  );
};

export default SectionWrapper(Works, "");