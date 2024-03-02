import { NavLink } from "react-router-dom";

import logo from "../assets/icons/logo.webp";
import home from "../assets/icons/home.png"
import project from "../assets/icons/project.png"
import contact from "../assets/icons/contact.png"
import activehome from "../assets/icons/activehome.png"
import activeproject from "../assets/icons/activeproject.png"
import activecontact from "../assets/icons/activemessage.png"
const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-12 h-12 object-cover' />
      </NavLink>
      <nav className='text-lg gap-7 font-medium max-sm:hidden max-lg:flex lg:flex sm:hidden'>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Home
        </NavLink>

        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>

        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Hit Me Up
        </NavLink>
      </nav>

      <nav className='text-lg gap-7 font-medium max-sm:flex max-lg:hidden lg:hidden sm:flex'>
        <NavLink to='/' >
          {({isActive})=> isActive ? <img src={activehome} alt='logo' className='w-8 h-8 object-cover' /> : <img src={home} alt='logo' className='w-8 h-8 object-cover' />}
          
          
        </NavLink>
        <NavLink to='/projects' >
        {({isActive})=> isActive ? <img src={activeproject} alt='logo' className='w-8 h-8 object-cover' /> : <img src={project} alt='logo' className='w-8 h-8 object-cover' />}
        </NavLink>
        <NavLink to='/contact' >
        {({isActive})=> isActive ? <img src={activecontact} alt='logo' className='w-8 h-8 object-cover' />: <img src={contact} alt='logo' className='w-8 h-8 object-cover' />}
        </NavLink>
      </nav>

    </header>
  );
};

export default Navbar;
