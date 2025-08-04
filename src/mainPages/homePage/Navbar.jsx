import "./navBar.css";
import { NavLink } from "react-router-dom";
import CarButton from "../carButton/CarButton";
// import Logo from "../../images/logo1.png";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subtitle, setSubtitle] = useOutletContext();

  return (
    <div className="navHero">
      <div className="subtitleButtons">
        <CarButton text="EN" onClick={() => setSubtitle(false)} />
        <CarButton text="MK" onClick={() => setSubtitle(true)} />
      </div>

      {/* Desktop Navigation */}
      <motion.div
        className="navBar"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <ul className="montserrat">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "Почетна" : "Home"}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="avticikiBre"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "АвтичикиБре" : "AvticikiBre"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="automobiles"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "Автомобилизам" : "Automobiles"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="roguebrush"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              RogueBrush
            </NavLink>
          </li>
          <li>
            <NavLink
              to="local"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "Локално" : "Local"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "За нас" : "About"}
            </NavLink>
          </li>
        </ul>
      </motion.div>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobileMenu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              {subtitle ? "Почетна" : "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink to="about" onClick={() => setMenuOpen(false)}>
              {subtitle ? "За нас" : "About"}
            </NavLink>
          </li>
          <li>
            <NavLink to="avticikiBre" onClick={() => setMenuOpen(false)}>
              {subtitle ? "АвтичикиБре" : "AvticikiBre"}
            </NavLink>
          </li>
          <li>
            <NavLink to="automobiles" onClick={() => setMenuOpen(false)}>
              {subtitle ? "Автомобилизам" : "Automobiles"}
            </NavLink>
          </li>
          <li>
            <NavLink to="roguebrush" onClick={() => setMenuOpen(false)}>
              RogueBrush
            </NavLink>
          </li>
          <li>
            <NavLink to="local" onClick={() => setMenuOpen(false)}>
              {subtitle ? "Локално" : "Local"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
