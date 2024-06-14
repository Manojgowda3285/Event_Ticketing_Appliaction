import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {  PersonOutlineOutlined } from "@mui/icons-material";

const NavItem = ({ handleMenuClose, item, heading, isActive }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register", {
      state: {
        name: heading,
      },
    });
    handleMenuClose();
  };

  return (
    <li
      className={`${styles["nav-item"]} ${isActive && styles["active"]}`}
      onClick={() => handleMenuClose(item.path)}
    >
      <a>
        {item?.button ? (
          <PersonOutlineOutlined />
        ) : (
          item?.name
        )}
      </a>
    </li>
  );
};

const Navbar = ({ navItems, heading }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');


  const handleMenuClose = (path) => {
      handleScrollToSection(path);
  };
  const matches = useMediaQuery("(max-width:930px)");

  const handleScrollToSection = (path) => {
    const element = document.getElementById(path.substring(1));
    if (element) {
      setActiveSection(path);
      const offset = element.getBoundingClientRect().top;
      const navbarHeight = 120;
      const targetPosition = offset + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles["nav-container"]}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: "1rem 0rem 0.5rem 0rem", width: "100%" }}
      >
        <Box
          component={"img"}
          width="100%"
          src={"https://media.konfhub.com/konfhub-logo-purple.svg"}
          sx={{ maxWidth: { xs: "4rem", sm: "5rem", md: "6rem" } }}
        ></Box>
        {matches &&(<PersonOutlineOutlined/>)}
        <div className={styles["nav-desktop"]}>
          <ul className={styles["nav-list"]}>
            {navItems.map((item, index) => 
            (
              <NavItem
                key={index}
                item={item}
                heading={heading}
                handleMenuClose={() => handleMenuClose(item.path)}
                isActive={activeSection === item.path}
              />
            ))}
          </ul>
        </div>
       
      </Stack>
    </div>
  );
};

export default Navbar;
