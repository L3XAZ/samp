import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './MainPage.module.scss'

export default function MainPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.part}>1</div>
            <div id="about" className={styles.part}>2</div>
            <div id="news" className={styles.part}>3</div>
        </main>
    )
}

