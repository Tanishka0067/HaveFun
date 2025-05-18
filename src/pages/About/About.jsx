import React from 'react'
import star from '../../assets/star3.jpg'
const About = () => {
  return (
   
     <section id="about"  data-aos="fade-up" style={{ backgroundImage: `url(${star})` }}
            className="w-full h-screen bg-cover bg-center text-white">
          <p className="mt-8 ml-8 text-xs  p-2 rounded-xl w-fit bg-white text-black font-semibold">
            ⚪ About Us
          </p>
          <div className="flex md:flex-row flex-col items-center h-screen m-12  min-w-full bg-transparent text-white">


            </div>
           </section>
  )
}

export default About
