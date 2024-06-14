import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { NavLink, useLocation, useMatch, useNavigate } from "react-router-dom";
import { PersonOutlineOutlined } from "@mui/icons-material";

const NavItem = ({ handleMenuClose, item, heading }) => {
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
      className={`${styles["nav-item"]} ${
        item?.path === window.location.pathname && !item?.button && styles["active"]
        
      }`}
      onClick={handleMenuClose}
    >
      <a>
        {item?.button ? (
         <PersonOutlineOutlined/>
        ) : (
          item?.name
        )}
      </a>
    </li>
  );
};

const Navbar = ({ navItems,  heading }) => {
  const matches = useMediaQuery("(min-width:349px)");
  const Location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClose = (path) => {
    setShowMenu(false);
    if (path !== "Book Demo" && path !== "/free-trial") {
      handleScrollToSection(path);
    }
  };

  const handleScrollToSection = (path) => {
    const element = document.getElementById(path.substring(1));
    if (element) {
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
          {/* <NavLink to={logo_path}> */}
            <Box
              component={"img"}
              width="100%"
              src={"https://media.konfhub.com/konfhub-logo-purple.svg"}
              sx={{ maxWidth: { xs: "4rem", sm: "5rem", md: "6rem" } }}
            ></Box>
          {/* </NavLink> */}
          <div className={styles["nav-desktop"]}>
            <ul className={styles["nav-list"]}>
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  item={item}
                  heading={heading}
                  handleMenuClose={() => handleMenuClose(item.path)}
                />
              ))}
            </ul>
          </div>

          <div className={styles["nav-mobile"]}>
            <Stack
              alignItems="center"
              direction="row"
              spacing={{ xs: 2, sm: 3, md: 4 }}
            >
              
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className={`${styles["nav-btn"]} ${
                  showMenu && styles["active"]
                }`}
              ></button>
            </Stack>
            <div
              className={`${styles["nav-mobile-container"]} ${
                showMenu && styles["show"]
              }`}
            >
              <ul className={styles["nav-list"]}>
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    item={item}
                    heading={heading}
                    handleMenuClose={() => handleMenuClose(item.path)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </Stack>
      
    </div>
  );
};

export default Navbar;
