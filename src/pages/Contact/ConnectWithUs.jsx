import React from "react";
import {IoCallSharp} from "react-icons/io5";
import {MdEmail,MdChat, MdLocationOn} from "react-icons/md";

import TrustedNetworks from "../../shared/TrustedNetworks";

const contactInfo = [
  {
    id: 1,
    label: "silvercabscampbelltown@gmail.com",
    Icon: MdEmail,
  },
  {
    id: 2,
    label: "+1300 450 428",
    Icon: IoCallSharp,
  },

  {
    id: 3,
    label: "200 Gilchrist Drive, Campbelltown",
    Icon: MdLocationOn,
  },
];



const ConnectWithUs = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary">Connect With Us</h3>
      <div className="mt-5">
        {contactInfo.map((info) => (
          <div className="flex items-center gap-2 md:gap-4 py-3" key={info.id}>
            <info.Icon className="text-2xl text-primary " />
            <p className="text-xs md:text-lg">{info.label}</p>
          </div>
        ))}
      </div>
      {/* social icon */}
      <div className="pt-6">
        <TrustedNetworks />
      </div>
    </div>
  );
};

export default ConnectWithUs;
