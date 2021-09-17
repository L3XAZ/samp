import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './StartPlayingPage.module.scss'
import vector_11 from './../../images/vector_11.svg';
import vector_12 from './../../images/vector_12.svg';
import vector_11_mobile from './../../images/vector_11_mobile.svg';
import vector_12_mobile from './../../images/vector_12_mobile.svg';
import Launcher from './Launcher/Launcher';

export default function StartPlayingPage() {
    return (
        <div className={styles.startPlayingPage}>
            <Navbar />
            <div className={styles.wrapper}>
                <section className={styles.container}>
                    <div className={styles.topic}>
                        <img src={vector_11} alt="" />
                        <h1 className={styles.title}>НАЧАТЬ ИГРАТЬ</h1>
                        <img src={vector_12} alt="" />
                    </div>
                    <div className={styles.topic_mobile}>
                        <img src={vector_11_mobile} alt="" />
                        <h1 className={styles.title}>НАЧАТЬ ИГРАТЬ</h1>
                        <img src={vector_12_mobile} alt="" />
                    </div>
                    <div className={styles.launchers}>
                        <Launcher
                            title="ЛАУНЧЕР RENAISSANCE RP"
                            text="Недоступны все функции в игре?Скачивай лаунчер и весь функционал сервера будет доступен. Автомобили мечты, голосовой чат и прочее."
                            backgroundColor="rgba(197, 121, 46, 0.5)"
                            className={styles.launchers__desktop}
                        />
                        <Launcher
                            title="БЕЗ ЛАУНЧЕРА"
                            text="Чистая GTA:SA, с голосовым чатом. Недоступны все функции сервера."
                            backgroundColor="rgba(202, 126, 51, 0.5)"
                            className={styles.launchers__desktop}
                        />
                        <Launcher
                            title="МОБИЛЬНЫЙ КЛИЕНТ"
                            text="Играй на учебе/работе прямо со своего Android (7.0) смартфона! Голосовой чат и весь функционал сервера уже внутри!"
                            backgroundColor="rgba(179, 109, 49, 0.5)"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
