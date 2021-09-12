import React from 'react'
import styles from './Launcher.module.scss'

export default function Launcher({ title, text, backgroundColor }) {
    return (
        <div
            className={styles.launcher}
            style={{ backgroundColor: backgroundColor }}
        >
            <div className={styles.launcher__card}>
                <h3 className={styles.launcher__title}>{title}</h3>
                <p className={styles.launcher__text}>{text}</p>
            </div>
            <button className={styles.launcher__button}>
                <p className={styles.button_text}>СКАЧАТЬ</p>
            </button>
        </div>
    )
}
