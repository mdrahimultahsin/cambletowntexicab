import React from "react";
import {IoCallSharp} from "react-icons/io5";
import {MdEmail, MdChat, MdLocationOn} from "react-icons/md";

import TrustedNetworks from "../../shared/TrustedNetworks";
import { FaInbox, FaWhatsapp } from "react-icons/fa6";

const contactInfo = [
  {
    id: 1,
    label: "silvercabscampbelltown@gmail.com",
    Icon: MdEmail,
    href: "mailto:silvercabscampbelltown@gmail.com",
  },

  {
    id: 2,
    label: "200 Gilchrist Drive, Campbelltown",
    Icon: MdLocationOn,
    href: "https://share.google/K9uIHai7caaEaFuBf",
  },
  {
    id: 3,
    label: "1300 450 428",
    Icon: IoCallSharp,
    href: "tel:+1300450428",
  },
  {
    id: 4,
    label: "Send Message",
    Icon: FaInbox,
    href: "sms:+61423963380",
  },
  {
    id: 5,
    label: "Whatsapp",
    Icon: FaWhatsapp,
    href: "https://wa.me/61423963380",
  },
];

const ConnectWithUs = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary">Connect With Us</h3>
      <div className="mt-5">
        {contactInfo.map((info) => (
          <a
            href={info.href}
            target="_blank"
            className="flex items-center gap-2 md:gap-4 py-2"
            key={info.id}
          >
            <info.Icon className="text-2xl text-primary " />
            <p className="text-xs md:text-lg">{info.label}</p>
          </a>
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
