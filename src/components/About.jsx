import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion'
import {styles}from '../styles'
import {fadeIn, textVariant} from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const About = () => {
  return (
    <>
    {/*About section*/}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm a recent Computer Science graduate with a strong interest in web development and software engineering. I have experience working with HTML, CSS, JavaScript, Java, and Python, and I enjoy building responsive, user-friendly applications that solve real-world problems.
      Through academic projects and personal development work, I've developed skills in programming, problem-solving, and creating modern web interfaces. I'm eager to continue learning new technologies, collaborate with other developers, and contribute to software projects.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About,"about");