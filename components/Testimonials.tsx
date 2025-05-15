import React from 'react'
import { AnimatedGradientText } from './magicui/animated-gradient-text'
import {TestimonialComponent} from './testimonials-columns'

const Testimonials = () => {
  return (
    <section id='testimonials' className='my-32 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-52'>
      <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center">
          <p
            className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm"
          >
            TESTIMONIALS
          </p>
          <span>
            Word On The Street <br/>
          </span>
          <AnimatedGradientText className='tangerine-bold pr-2 text-6xl'>About Me</AnimatedGradientText>
        </h2>
        <TestimonialComponent/>
    </section>
  )
}

export default Testimonials
