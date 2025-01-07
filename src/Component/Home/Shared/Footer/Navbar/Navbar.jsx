import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navOption = <>
   
    
      <li>
        <NavLink to={'/'} className="text-yellow-500 font-semibold">HOME</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to={'/dashboard'}>DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to={'/our-menu'}>OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to={'/order/salad'}>ORDER FOOD</NavLink>
      </li>
   
    
    </>

    return (
        <>


<div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navOption}
      </ul>
    </div>
    <div className="navbar-start">
    <a className="text-2xl font-bold tracking-wide">
      BISTRO BOSS <span className="block text-sm font-normal">RESTAURANT</span>
    </a>
  </div>
  </div>
  
  <div className="navbar-end">
  <div className="hidden lg:flex">
    <ul className="gap-8 text-sm menu-horizontal px-1">
     {navOption}
    </ul>
  </div>
  <button className="btn btn-circle btn-outline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.121 17.804A5.5 5.5 0 0115 13.99m-9.879 3.814L3 21l3.196-2.757M19 5h-7m3-3v7" />
      </svg>
    </button>
  </div>
</div>
            
        </>
    );
};

export default Navbar;