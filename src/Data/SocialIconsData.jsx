import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
// import { BsGithub } from "react-icons/bs";

const SocialIcons = [
  {
    title: "Linkedin",
    url: "",
    icon: <BsLinkedin />,
    cName: "social-text",
    active: true,
  },
  {
    title: "Github",
    url: "",
    icon: <BsGithub />,
    cName: "social-text",
    active: true,
  },
  {
    title: "Mail",
    url: "",
    icon: <AiOutlineMail />,
    cName: "social-text",
    active: true,
  },
  {
    title: "Instagram",
    url: "",
    icon: <FaInstagram />,
    cName: "social-text",
    active: true,
  },
];

export default SocialIcons;
