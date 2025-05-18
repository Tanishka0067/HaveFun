import React, { useState, useEffect } from 'react';
import logo from '../../assets/logosm.png';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('#home');

  // Add a scroll listener to track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(`#${id}`);
          window.history.pushState(null, '', `#${id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (sections) {
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <nav className='nav flex flex-row justify-between px-12 py-2 items-center bg-black fixed w-full top-0 left-0 right-0 z-50'>
      <div className='logo p-2 hidden md:block '>
        <img src={logo} alt='HaveFun' className='h-10 mt-4 ml-8' />
      </div>

      <ul className='nav-routes text-white flex flex-row justify-evenly  lg:justify-end md:justify-between sm:justify-between gap-3 md:gap-6 lg:gap-14 font-bold text-xs px-2 md:px-6 lg:px-10 w-full'>
        <a href="#home">
          <li className={`p-1 ${activeSection === '#home' ? 'border-b-2 border-white' : ''} hover:border-b-2 hover:border-dotted hover:border-white`}>
            HOME
          </li>
        </a>
        <a href="#about">
          <li className={`p-1 ${activeSection === '#about' ? 'border-b-2 border-white' : ''} hover:border-b-2 hover:border-dotted hover:border-white`}>
            ABOUT
          </li>
        </a>
      
        
        <a href="#contact">
          <li className={`p-1 ${activeSection === '#contact' ? 'border-b-2 border-white' : ''} hover:border-b-2 hover:border-dotted hover:border-white`}>
           CONTACT
          </li>
        </a>
        {/* <a href="#career">
          <li className={`p-1 ${activeSection === '#about' ? 'border-b-2 border-white' : ''} hover:border-b-2 hover:border-dotted hover:border-white`}>
           CAREER
          </li>
        </a> */}
      </ul>
    </nav>
  );
};

export default Nav;