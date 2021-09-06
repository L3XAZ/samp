import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Vote from '../../components/Vote/Vote';
import styles from './MainPage.module.scss'
import { Link } from 'react-router-dom';
import youtubePromo from './../../images/youtube_2.png';
import lefttArrow from './../../images/group_16.svg';
import rightArrow from './../../images/group_15.svg';

export default function MainPage() {
    return (
        <div className={styles.mainPage}>
            <Navbar />
            <header className={styles.header}>
                <section id="intro" className={styles.intro}>
                    <div className={styles.offer}>
                        <h1 className={styles.offer__topic}>КТО МЫ?</h1>
                        <p className={styles.offer__description}>
                            {`Renaissance - это эпоха возрождения полюбившейся многим игры. 
                            Наш революционный подход направлен на постоянную работу с комьюнити, 
                            и мы сделаем всё для того, чтобы ваше времяпровождение на нашем проекте
                            было разнообразным, глубоким и интересным.`}
                        </p>
                        <div className={styles.offer__links}>
                            <Link
                                to="/start-playing"
                                className={`${styles.link} ${styles.startPlaying}`}
                            >
                                НАЧАТЬ ИГРАТЬ
                            </Link>
                            <Link
                                target={"_blank"}
                                to={{ pathname: "https://youtu.be/lQOsqeOheYU" }}
                                className={`${styles.link} ${styles.promoClip}`}
                            >
                                <img src={youtubePromo} alt="youtube promo clip" className={styles.promoClip__linkIcon} />
                                <div className={styles.promoClip__linkText}>
                                    <p>Узнай о нас</p>
                                    <p>за минуту</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.voting}>
                        <div className={styles.voting__topic}>
                            <img src={lefttArrow} alt="" />
                            <h3>Как Вам администрация нашего проекта?</h3>
                            <img src={rightArrow} alt="" />
                        </div>
                        <div className={styles.voting__votes}>
                            <Vote name="Супер" percent="30" />
                            <Vote name="Удовлетворительно" percent="65" />
                            <Vote name="Ужасно" percent="5" />
                        </div>
                    </div>
                </section>
            </header>
            <div className={styles.container}>
                <main className={styles.main}>
                    <section id="about" className={styles.about}>
                        asdfzc
                    </section>
                    <section id="news" className={styles.news}>
                        ewdqwedf
                    </section>
                </main>
                <footer className={styles.footer}>
                    efeafcaefaef
                </footer>
            </div>

        </div>
    )
}

