import React from 'react';
import star from '../../assets/star3.jpg';
import ui from '../../assets/ui.png';
import ui2 from '../../assets/ui2.png';
import logo from '../../assets/logonew.png';
const features = [
  {
    title: "Interactive Reels",
    image: ui,
    description:
      "Interact with any reel, ask questions, and receive instant answers. Blend entertainment, AI, and education into one.",
  },
  {
    title: "Location-based Social Hangouts",
    image: ui2,
    description:
      "Share your location to invite others. Watch who views the location and foster real-world social connections.",
  },
  {
    title: "",
    image: logo,
    description:
      "This is just the beginning! We’ve packed HaveFun with exciting, educational, and entertaining features—and there’s so much more on the way. Our official launch is just around the corner, so stay connected for exclusive offers, early access, and nonstop fun. We can’t wait for you to experience the world of HaveFun!",
  },
];

const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${star})` }}
      className="w-full min-h-screen bg-cover bg-center text-white py-16 px-4"
    >
      <p className="text-xs p-2 rounded-xl w-fit bg-white text-black font-semibold ml-4 mb-4 shadow-lg">
        ⚪ About Us
      </p>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Intro Section */}
        <div className="text-center bg-white/15 backdrop-blur p-8 rounded-2xl shadow-[0_0_30px_#ffffff40] space-y-4">
          <h1 className="text-4xl font-bold">Welcome to HaveFun – Powered by ZenAstra</h1>
          <p className="text-lg">
            A playful, intelligent platform for Gen Z & Gen Alpha to create, play, connect, and earn.
          </p>
          <h2 className="text-2xl font-semibold text-indigo-400 animate-pulse">
            Your Game, Your Stage, Your World
          </h2>
        </div>

        {/* Features Section */}
        <div className="space-y-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full">
                <img src={feature.image} className="h-72 w-full object-contain" alt={feature.title} />
              </div>
              <div className="w-full p-6 bg-white/15 backdrop-blur rounded-2xl shadow-[0_0_25px_#ffffff30]">
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Aim / Target */}
        <div className="space-y-8 text-center">
          <div className="bg-white/15 backdrop-blur p-8 rounded-2xl shadow-[0_0_25px_#ffffff30] max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Our Aim</h2>
            <p className="text-white/90 text-lg">
              To build an AI-powered platform for entertainment and education where users can connect, create, earn, and grow. We promote data ownership, privacy, creativity, and mental well-being.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur p-8 rounded-2xl shadow-[0_0_25px_#ffffff30] max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Our Target</h2>
            <p className="text-white/90 text-lg">
              To reach Gen Z & Gen Alpha globally, provide creative and financial freedom, and revolutionize gaming and content creation.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-300">
          <p>© {new Date().getFullYear()} HaveFun by ZenAstra. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default About;
