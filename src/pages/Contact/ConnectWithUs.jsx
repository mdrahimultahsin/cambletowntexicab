import React from 'react';
import { IoCallSharp, IoMail } from "react-icons/io5";
import { MdEmail, MdPhone, MdChat, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,} from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    label: "bookings@skymaxicabs.com.au",
    Icon: MdEmail,
  },
  {
    id: 2,
    label: "support@skymaxicabs.com.au",
    Icon: IoCallSharp,
  },
  {
    id: 3,
    label: "Chat Online",
    Icon: MdChat,
  },
  {
    id: 4,
    label: ["Sydney", "Melbourne"],
    Icon: MdLocationOn,
  },
];

const socialLinks = [
  {
    id: 1,
    Icon: FaFacebookF,
    link: "https://www.facebook.com/yourpage"
  },
  {
    id: 2,
    Icon: FaInstagram,
    link: "https://www.instagram.com/yourpage"
  },
  {
    id: 3,
    Icon: FaTwitter,
    link: "https://www.twitter.com/yourpage"
  },
  {
    id: 4,
    Icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/yourprofile"
  }
];


const ConnectWithUs = () => {
    return (
        <div className="p-3 md:p-6">
            <h3 className="text-3xl font-semibold text-primary">
              Connect With Us
            </h3>
            <div className="mt-5">
              {contactInfo.map((info) => (
                <div className="flex items-center gap-2 md:gap-4 py-3" key={info.id}>
                  <info.Icon className="text-2xl text-primary " />
                  <p className='text-xs md:text-lg'>{info.label}</p>
                </div>
              ))}
            </div>
            {/* social icon */}
            <div className="text-center pt-6">
              <h4 className='text-2xl'>Follow Us</h4>
              <div className="flex gap-8 justify-center mt-4">
                {socialLinks.map((link) => (
                <div className="flex gap-4 p-2 bg-primary rounded-full " key={link.id}>
                  
                  <a href={link.link} target="blank">
                        <link.Icon className="text-2xl text-white" />
                  </a>
                </div>
              ))}
              </div>
            </div>
          </div>
    );
};

export default ConnectWithUs;