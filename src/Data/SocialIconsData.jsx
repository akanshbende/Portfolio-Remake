import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
// import { BsGithub } from "react-icons/bs";
import "./SocialIcon.css";
const emailAddress = "akanshbende@gmail.com";

const SocialIcons = [
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/akansh-bende",
    icon: <BsLinkedin className="linkedin" />,
    cName: "social-text",
    active: true,
  },
  {
    title: "Github",
    url: "https://github.com/akanshbende",
    icon: <BsGithub className="github" />,
    cName: "social-text",
    active: true,
  },
  {
    title: "Mail",
    url: `mailto:${emailAddress}`,
    icon: <AiOutlineMail className="message" />,
    cName: "social-text",
    active: true,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/akansh_bende?igshid=NTc4MTIwNjQ2YQ==",
    icon: <FaInstagram className="instagram" />,
    cName: "social-text",
    active: true,
  },
];

export default SocialIcons;
