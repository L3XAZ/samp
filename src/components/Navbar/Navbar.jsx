import React from 'react'
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo from './../../images/logo_orange.png';

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <nav className={styles.list}>
                <NavHashLink
                    to="/main#intro"
                    isActive={(_, location) => location.hash === "#intro"}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    ГЛАВНАЯ
                </NavHashLink>
                <NavHashLink
                    to="/main#about"
                    isActive={(_, location) => location.hash === "#about"}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    О НАС
                </NavHashLink>
                <NavHashLink
                    to="/main#news"
                    isActive={(_, location) => location.hash === "#news"}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    НОВОСТИ
                </NavHashLink>
                <div className={styles.logo} >
                    <img src={logo} alt="logo" />
                </div>
                <Link
                    target={"_blank"}
                    to={{ pathname: "https://forum.renaissance-rp.ru/" }}
                    className={styles.link}
                >
                    ФОРУМ
                </Link>
                <NavLink
                    to="/donate"
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    ДОНАТ
                </NavLink>
                <NavLink
                    to="/account"
                    className={`${styles.link} ${styles.accountLink}`}
                    activeClassName={styles.activeLink}
                >
                    ЛИЧНЫЙ КАБИНЕТ
                </NavLink>
            </nav>
        </header>
    )
}
