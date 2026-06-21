import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {socialLinks} from '../constants'
import {textVariant, fadeIn } from "../utils/motion";

const Contact = () => {
  return (
    <>

    {/*Heading*/}
      <motion.div variants={textVariant()}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

{/*Description*/}
      <div className='w-full flex'>
        <motion.p
        variants={fadeIn("up","spring",0.2,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Feel free to connect with me through LinkedIn or
          explore my work on GitHub.
        </motion.p>
      </div>

    {/*Contact Cards*/}
    {/*add icons later*/}

    <div className="container mx-auto">
      <div className="pt-8 pb-8">
        {/* social links */}
        <div className="flex flex-col justify-center items-center mb-12 sm:mb-28">
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="_blank"
                key={link.id}
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-[#ffffffb0] shadow-sm p-4 duration-300"
              >
                <img src={link.icon} alt="social icon" className="w-8 h-8"/>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact