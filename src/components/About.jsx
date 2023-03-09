import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import {fadeIn , textVariant} from '../motion';
import { services } from '../constants';
import Tilt from 'react-tilt';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index , title ,icon})=>{
return (
 <Tilt className="xs:w-[250px] w-full">
 <motion.dev variants={fadeIn("right","spring" ,0.5 * index ,0.75)} 
 className="w-full p-[1px] rounded-[20px] shadow-card">
  <div options={{max:45,
  scale:1,
  speed:450}} 
  className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
   <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
   <h3 className='text-white text-center text-[20px] font-bold '> {title}</h3>
  </div>
 </motion.dev>
 </Tilt>
)
}

const About = () => {
  return (
    <>
    <motion.dev variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.dev>

    <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-10xl leading-[30px]">
    I am someone who is focused towards learning new technology and trying to be more perfect in what i have learned. I have a discipline mindset and eager to learn new skills. 

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service , index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About , "about")