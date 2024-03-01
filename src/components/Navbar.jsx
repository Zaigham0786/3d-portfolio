import { NavLink } from "react-router-dom";

import  logo  from "../assets/icons/logo.webp";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-12 h-12 object-cover' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Home
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
        Hit Me Up
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
