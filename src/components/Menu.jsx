import Menu from "antd/es/menu";
import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { BiCalendarEvent, BiChild, BiMaleFemale } from "react-icons/bi";
import { MdGroupWork, MdLibraryMusic, MdEngineering, MdCelebration, MdEmojiEvents } from "react-icons/md";
import { VscGroupByRefType } from "react-icons/vsc";
import { FaMoneyCheckAlt, FaPray, FaChild, FaMale, FaFemale } from "react-icons/fa";
import { RiServiceFill, RiCommunityFill } from "react-icons/ri";
import { BsUnity } from "react-icons/bs";


const MenuComponent = () => {
  return (
    <Menu
      mode="inline"
      items={[
        {
          label: (
            <Link to={'/members'}>Members</Link>
          ),
          key: "members",
          icon: <IoIosPeople />,
          children: [],
        },
        {
          label: (
            <Link to={'/events'}>Events</Link>
          ),
          key: "events",
          icon: <BiCalendarEvent />,
          children: [
            {
              label: "Services",
              key: "services",
              icon: <RiCommunityFill/>,
            },
            {
              label: "Celebrations",
              key: "celebrations",
              icon: <MdCelebration/>,
            },
            {
              label: "Special Programs",
              key: "special_programs",
              icon: <MdEmojiEvents/>,
            },
          ],
        },
        {
          label: (
            <Link to={'/ministries'}>Ministries</Link>
          ),
          key: "minstries",
          icon: <MdGroupWork />,
          children: [
            {
              label: "Music",
              key: "music_ministry",
              icon: <MdLibraryMusic />,
            },
            {
              label: "Media & Technical",
              key: "media_technical_ministry",
              icon: <MdEngineering />,
            },
            {
              label: "Protocol",
              key: "protocol_ministry",
              icon: <RiServiceFill/>,
            },
            {
              label: "Intercessory",
              key: "intercessory_ministry",
              icon: <FaPray />,
            },
          ],
        },
        {
          label: (
            <Link to={'/groups'}>Groups</Link>
          ),
          key: "groups",
          icon: <VscGroupByRefType />,
          children: [
            {
              label: "Children",
              key: "children",
              icon: <BiChild/>,
            },
            {
              label: "Youth",
              key: "youth",
              icon: <FaChild/>,
            },
            {
              label: "Singles",
              key: "singles",
              icon: <BiMaleFemale/>,
            },
            {
              label: "Men's Fellowship",
              key: "men",
              icon: <FaMale/>,
            },
            {
              label: "Women's Fellowship",
              key: "women",
              icon: <FaFemale/>,
            },
            {
              label: "DayBorn Groups",
              key: "women",
              icon: <BsUnity/>,
            },
          ],
        },
        {
          label: (
            <Link to={'/finance'}>Finance</Link>
          ),
          key: "acounts",
          icon: <FaMoneyCheckAlt />,
          children: [
            // {
            //   label: "Income",
            //   key: "",
            //   icon: "",
            // },
            // {
            //   label: "",
            //   key: "",
            //   icon: "",
            // },
          ],
        },
      ]}
    ></Menu>
  )
};

export default MenuComponent;
