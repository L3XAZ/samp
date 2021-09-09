import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './StartPlayingPage.module.scss'
import vector_11 from './../../images/vector_11.svg';
import vector_12 from './../../images/vector_12.svg';
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
                    <div className={styles.launchers}>
                        <Launcher
                            title="ЛАУНЧЕР RENAISSANCE RP"
                            text="Недоступны все функции в игре?Скачивай лаунчер и весь функционал сервера будет доступен. Автомобили мечты, голосовой чат и прочее."
                        />
                        <Launcher
                            title="БЕЗ ЛАУНЧЕРА"
                            text="Чистая GTA:SA, с голосовым чатом. Недоступны все функции сервера."
                        />
                        <Launcher
                            title="МОБИЛЬНЫЙ КЛИЕНТ"
                            text="Играй на учебе/работе прямо со своего Android (7.0) смартфона! Голосовой чат и весь функционал сервера уже внутри!"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
