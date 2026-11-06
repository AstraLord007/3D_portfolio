import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { linkedin as linkedinIcon } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedin,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <div className='flex items-center gap-2'>
            {linkedin ? (
              <a
                href={linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 group hover:opacity-90 transition-opacity'
                title="Ver perfil de LinkedIn"
              >
                <div className='w-8 h-8 flex items-center justify-center'>
                  <img
                    src={linkedinIcon}
                    alt='linkedin'
                    className='w-full h-full object-contain'
                  />
                </div>
                <p className='text-white font-medium text-[16px] group-hover:underline'>
                  {name}
                </p>
              </a>
            ) : (
              <p className='text-white font-medium text-[16px]'>
                {name}
              </p>
            )}
          </div>

          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className='w-14 h-14 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");