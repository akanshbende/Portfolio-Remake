import HomeIcon from "@mui/icons-material/Home";
import DataObjectIcon from "@mui/icons-material/DataObject";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import InfoIcon from "@mui/icons-material/Info";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
const SidebarItems = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon />,
    active: true,
    cName: "nav-text",
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <DataObjectIcon />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    url: "/skill",
    icon: <IntegrationInstructionsIcon />,
    cName: "nav-text",
  },
  {
    title: "About",
    url: "/about",
    icon: <InfoIcon />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    url: "/resume",
    icon: <RecentActorsIcon />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <ContactPhoneIcon />,
    cName: "nav-text",
  },
];

export default SidebarItems;
