import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/star3.jpg";
 
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
    });
  }, []);
  const [name, setName] = useState("");
  const email = "Official@havefun4u.com";
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);
  const contactInfo = [
    {
      title: "ABOUT ME",
      details: [
        "Name: HaveFun",
        "Email: Official@havefun4u.com",
        "Phone: +91 7003961560",
      ],
    },
    
    {
      title: "CONTACT US",
      details: [
        "Want to discuss something?",
        "Need advice?",
        "Want to say hi?",
      ],
    },
    {
      title: "BUSINESS INQUIRIES",
      details: [
        "Have a project in mind?",
        "Looking for a partner?",
        "Want to collaborate?",
      ],
    },
    {
      title: "JOIN OUR TEAM",
      details: [
        "If you want to join my team and work on exciting projects, tell me your story.",
      ],
    },
    {
      title: "GENERAL CONTACT",
      details: [
        "Don't hesitate to reach out. I usually respond within 24 hours unless it's a holiday.",
      ],
    },
     {
      title: "LAUNCHING SOON",
      details: [
        "Reach out if you have any questions or suggestions.",
        "We are launching soon, stay tuned for updates!",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % contactInfo.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link using the manually entered recipient email
    const subject = `Message from ${name}`;
    const body = `Hi, my name is ${name},\n\n${message}\n\nYou can contact me at: ${senderEmail}`;

    // Construct the mailto URL
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact"  data-aos="fade-up" style={{ backgroundImage: `url(${bg})` }}
        className="w-full overflow-hidden h-screen bg-cover bg-center text-white">
      <p className="mt-8 ml-8 text-xs  p-2 rounded-xl w-fit text-black bg-white font-semibold">
        ⚪ Contact Us
      </p>
      <div className="flex md:flex-row flex-col items-center h-screen m-12  min-w-full bg-transparent text-white">
        <div className="md:w-1/2 w-full  p-8 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="p-6 font-inconsolata md:w-3/4 w-3/4  text-base font-medium bg-white/85  rounded-lg text-black"
          >
            <div>
              <label htmlFor="name" className="block text-lg">
                Hi my name is
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-black p-1"
                required
              />
            </div>
            {name && (
              <div>
                <label htmlFor="email" className="block text-lg">
                  My email is
                </label>
                <input
                  type="email"
                  id="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full p-1 bg-transparent border-b border-black"
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="message" className="block text-lg">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-1 bg-transparent border border-black rounded-lg h-48"
                rows="6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 text-lg rounded-lg "
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="md:w-1/2 w-full md:pt-96 md:h-screen order-first md:order-last p-8 flex flex-col justify-center md:overflow-y-hidden contact-scroll">
          <div className="contact-scroll-content">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="md:h-fit md:p-6  h-56  flex-shrink-0 flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;