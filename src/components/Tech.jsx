import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc"
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import js from '../assets/tech/javascript.png'
import figma from '../assets/tech/figma.png'
import typescript from '../assets/tech/typescript.png'
import redux from '../assets/tech/redux.png'
import react from '../assets/tech/reactjs.png'
import click from '../assets/tech/click-funnels.svg'
import tailwind from '../assets/tech/tailwind.png'
import git  from "../assets/tech/git.png";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
        <div className='w-28 h-28' >
          <BallCanvas icon={html} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={css} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={js} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={figma} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={typescript} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={tailwind} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={git} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={react} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={redux} />
        </div>
        <div className='w-28 h-28' >
          <BallCanvas icon={click} />
        </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");