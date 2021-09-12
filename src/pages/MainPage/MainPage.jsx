import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Vote from './Vote/Vote';
import styles from './MainPage.module.scss'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import youtubePromo from './../../images/youtube_2.png';
import lefttArrow from './../../images/group_16.svg';
import rightArrow from './../../images/group_15.svg';
import vkGroup from './../../images/vk_2.png';
import vector_1 from './../../images/vector_1.svg';
import vector_2 from './../../images/vector_2.svg';
import vector_3 from './../../images/vector_3.svg';
import vector_4 from './../../images/vector_4.svg';
import vector_5 from './../../images/vector_5.svg';
import vector_6 from './../../images/vector_6.svg';
import instagram from './../../images/instagram.png';
import youtube from './../../images/youtube.png';
import vk from './../../images/vk.png';
import telegram from './../../images/telegram.png';
import discord from './../../images/discord.png';
import arrowUp from './../../images/arrowUp.png';
import ServerCard from './ServerCard/ServerCard';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-oldschool-dark";
import News from './News/News';

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
                    <section className={styles.serverAndGroup}>
                        <div className={styles.server}>
                            <img src={vector_3} alt="" />
                            <h2 className={styles.server__topic}>НАШИ СЕРВЕРА</h2>
                            <Provider
                                template={AlertTemplate}
                                {...{ timeout: 1500, position: positions.BOTTOM_CENTER }}
                            >
                                <div className={styles.card}>
                                    <ServerCard
                                        name="DaVinci"
                                        address="http://davinci.renaissance-rp.ru:7777"
                                        visitors="777"
                                    />
                                </div>
                            </Provider>
                        </div>
                        <div className={styles.group}>
                            <img src={vector_4} alt="" />
                            <h2 className={styles.group__topic}>ПРИСОЕДИНЯЙСЯ</h2>
                            <Link
                                className={styles.card}
                                target={"_blank"}
                                to={{ pathname: "https://vk.com/renaissance_davinci" }}
                            >
                                <h3 className={styles.group__title}>СООБЩЕСТВО</h3>
                                <img src={vkGroup} alt="vk logo" />
                            </Link>
                        </div>
                    </section>
                    <section id="about" className={styles.about}>
                        <div className={styles.about__topic}>
                            <img src={vector_5} alt="" />
                            <h2>О НАС</h2>
                            <img src={vector_6} alt="" />
                        </div>
                        <div className={styles.about__description}>
                            <p>
                                Если ты, желаешь примкнуться к мастерам эпохи Возрождение и ощутить эстетическое удовлетворение старой
                                атмосферы GTA:SA, присоединяйся и начинай играть прямо сейчас!
                            </p>
                            <b>Также ты получишь:</b>
                        </div>
                        <div className={styles.about__offers}>
                            <div className={styles.offer}>
                                <h3 className={styles.offer__title}>АУДИТОРИЯ</h3>
                                <p className={styles.offer__text}>
                                    Самая собранная аудитория в комьюнити среди всех игровых проектов в SA:MP
                                </p>
                            </div>
                            <div className={styles.offer}>
                                <h3 className={styles.offer__title}>ГОЛОСОВОЙ ЧАТ</h3>
                                <p className={styles.offer__text}>
                                    Вживайся в роль и общайся с другими игроками по микрофону
                                </p>
                            </div>
                            <div className={styles.offer}>
                                <h3 className={styles.offer__title}>ЭПОХА ВОЗРОЖДЕНИЯ</h3>
                                <p className={styles.offer__text}>
                                    Удивительный мир и ощущение атмосферы, которая была в 2015-2017 годах
                                </p>
                            </div>
                        </div>
                    </section>
                    <section id="news" className={styles.news}>
                        <div className={styles.news__topic}>
                            <img src={vector_1} alt="" />
                            <h2>НОВОСТИ</h2>
                            <img src={vector_2} alt="" />
                        </div>
                        <News />
                    </section>
                </main>
                <footer className={styles.footer}>
                    <section className={styles.info}>
                        <div className={styles.serverNameAndNetworks}>
                            <h3 className={styles.serverName}>Renaissanse Role Play</h3>
                            <div className={styles.socialNetworks}>
                                <Link
                                    target={"_blank"}
                                    to={{ pathname: "https://www.instagram.com/renaissance_rp/" }}
                                >
                                    <img src={instagram} alt="instagram link" />
                                </Link>
                                <Link
                                    target={"_blank"}
                                    to={{ pathname: "https://youtube.com/channel/UCUI5iljw88eg6DIGGxmP41g" }}
                                >
                                    <img src={youtube} alt="youtube link" />
                                </Link>
                                <Link
                                    target={"_blank"}
                                    to={{ pathname: "https://vk.com/renaissance_rp" }}
                                >
                                    <img src={vk} alt="vk link" />
                                </Link>
                                <Link
                                    target={"_blank"}
                                    to={{ pathname: "https://t.me/renaissance_rp" }}
                                >
                                    <img src={telegram} alt="telegram link" />
                                </Link>
                                <Link
                                    target={"_blank"}
                                    to={{ pathname: "https://discord.gg/zPuU9HkEJj" }}
                                >
                                    <img src={discord} alt="discord link" />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.documents}>
                            <Link
                                target={"_blank"}
                                to={{ pathname: "https://drive.google.com/file/d/1Aet0Og12jyT9FxHR6is_eyctk-DF2Wbx/view" }}
                            >
                                <p>Политика конфиденциальности</p>
                            </Link>
                            <Link
                                target={"_blank"}
                                to={{ pathname: "https://drive.google.com/file/d/1TFnYTYNWCkEE3GKNHY9VZ4ntEpsD3zBv/view" }}
                            >
                                <p>Пользовательское соглашение</p>
                            </Link>
                        </div>
                        <div className={styles.contacts}>
                            <p>E-mail: <a href="mailto:renaissancerp.cooperation@gmail.com">admin@renaissance-rp.ru</a></p>
                        </div>
                        <HashLink
                            to="/main#intro"
                            isActive={(_, location) => location.hash === "#intro"}
                            className={styles.goToTheTop}
                        >
                            <img src={arrowUp} alt="go to the top of the page" />
                        </HashLink>
                    </section>
                </footer>
            </div>
        </div>
    )
}

