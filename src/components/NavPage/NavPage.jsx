import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavPage.module.css";
import myAva from "../../assets/ava.jpg";

const NavPage = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      {openMenu && (
        <div className={styles.wrapper}>
          <nav className={styles.nav} onBlur={() => setOpenMenu(!openMenu)}>
            <div className={styles.wrapperAva}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
                to="/profile"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <img className={styles.myAva} src={myAva} alt="Not found." />
              </NavLink>
            </div>
            <div className={styles.contacts}>
              <h2>Илья</h2>
              <a href="mailto:ilyha__96@inbox.ru">ilyha__96@inbox.ru</a>
            </div>
            <div className={styles.wrapperItem}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
                to="/main"
                onClick={() => setOpenMenu(!openMenu)}
              >
                Main Page
              </NavLink>
            </div>
            <div className={styles.wrapperItem}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
                to="/aboutme"
                onClick={() => setOpenMenu(!openMenu)}
              >
                About Me
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavPage;
