import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo from './../../images/logo_orange.png';
import logoMobile from './../../images/logo_white.png';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-oldschool-dark";
import UnavailablePage from './UnavailablePage/UnavailablePage';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  
  div {
    width: 2rem;
    height: 0.20rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className={styles.navbar}>
            <div className={`${styles.logo} ${styles.logoMobile}`} >
                <img src={logoMobile} alt="logo" />
            </div>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <Nav className={styles.list} open={open}>
                <NavHashLink
                    to="/main#intro"
                    isActive={(_, location) => location.hash === "#intro"}
                    className={`${styles.link} ${styles.mainLink}`}
                    activeClassName={styles.activeLink}
                >
                    ГЛАВНАЯ
                </NavHashLink>
                <NavHashLink
                    to="/main#about"
                    isActive={(_, location) => location.hash === "#about"}
                    className={`${styles.link} ${styles.aboutLink}`}
                    activeClassName={styles.activeLink}
                >
                    О НАС
                </NavHashLink>
                <NavHashLink
                    to="/main#news"
                    isActive={(_, location) => location.hash === "#news"}
                    className={`${styles.link} ${styles.newsLink}`}
                    activeClassName={styles.activeLink}
                >
                    НОВОСТИ
                </NavHashLink>
                <div className={`${styles.logo} ${styles.logoNav}`} >
                    <img src={logo} alt="logo" />
                </div>
                <Link
                    target={"_blank"}
                    to={{ pathname: "https://forum.renaissance-rp.ru/" }}
                    className={`${styles.link} ${styles.forumLink}`}
                >
                    ФОРУМ
                </Link>
                <NavLink
                    to="/donate"
                    className={`${styles.link} ${styles.donateLink}`}
                    activeClassName={styles.activeLink}
                >
                    ДОНАТ
                </NavLink>
                <Provider
                    template={AlertTemplate}
                    {...{ timeout: 1500, position: positions.BOTTOM_CENTER }}
                >
                    <UnavailablePage
                        // to="/account"
                        className={`${styles.link} ${styles.accountLink}`}
                    // activeClassName={styles.activeLink}
                    >
                        {/* ЛИЧНЫЙ КАБИНЕТ */}
                    </UnavailablePage>
                </Provider>
            </Nav>
        </header>
    )
}
