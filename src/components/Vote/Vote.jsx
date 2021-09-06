import React from 'react'
import styles from './Vote.module.scss'

export default function Vote({name, percent}) {
    return (
        <div className={styles.vote}>
            <p className={styles.name}>{name}</p>
            <p className={styles.percent}>{percent}%</p>
            <div className={styles.percentageBar}></div>
            <button className={styles.submit}>ГОЛОСОВАТЬ</button>
        </div>
    )
}
