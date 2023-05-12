import Menu from "antd/es/menu";
import { Link } from "react-router-dom";

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
          icon: "",
          children: [],
        },
        {
          label: (
            <Link to={'/events'}>Events</Link>
          ),
          key: "events",
          icon: "",
          children: [
            {
              label: "Services",
              key: "services",
              icon: "",
            },
            {
              label: "Celebrations",
              key: "celebrations",
              icon: "",
            },
            {
              label: "Special Programs",
              key: "special_programs",
              icon: "",
            },
          ],
        },
        {
          label: (
            <Link to={'/ministries'}>Ministries</Link>
          ),
          key: "minstries",
          icon: "",
          children: [
            {
              label: "Music",
              key: "music_ministry",
              icon: "",
            },
            {
              label: "Media & Technical",
              key: "media_technical_ministry",
              icon: "",
            },
            {
              label: "Protocol",
              key: "protocol_ministry",
              icon: "",
            },
            {
              label: "Intercessory",
              key: "intercessory_ministry",
              icon: "",
            },
          ],
        },
        {
          label: (
            <Link to={'/groups'}>Groups</Link>
          ),
          key: "groups",
          icon: "",
          children: [
            {
              label: "Children",
              key: "children",
              icon: "",
            },
            {
              label: "Youth",
              key: "youth",
              icon: "",
            },
            {
              label: "Singles",
              key: "singles",
              icon: "",
            },
            {
              label: "Men's Fellowship",
              key: "men",
              icon: "",
            },
            {
              label: "Women's Fellowship",
              key: "women",
              icon: "",
            },
            {
              label: "DayBorn Groups",
              key: "women",
              icon: "",
            },
          ],
        },
        {
          label: (
            <Link to={'/finance'}>Finance</Link>
          ),
          key: "acounts",
          icon: "",
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
