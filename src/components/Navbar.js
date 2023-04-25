import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Members", path: "/members" },
    { id: 3, name: "Finance", path: "/finance" },
    { id: 4, name: "Events", path: "/events" },
    { id: 5, name: "Ministries", path: "/ministries" },
    { id: 6, name: "Groups", path: "/groups" },
  ];
  return (
    <nav className="navbar">
      <h1>Church Mg't</h1>
      <ul>
        {links.map((link) => <li key={link.id}><NavLink to={link.path}> {link.name} </NavLink></li>)}
      </ul>
    </nav>
  );
};

export default Navbar;
