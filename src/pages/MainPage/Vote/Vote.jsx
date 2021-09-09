import React from 'react'
import Progressbar from '../../../components/Progressbar/Progressbar'
import styles from './Vote.module.scss'

export default function Vote({ name, percent }) {
    return (
        <div className={styles.vote}>
            <p className={styles.name}>{name}</p>
            <div className={styles.progress}>
                <p className={styles.percent}>{percent}%</p>
                <Progressbar width='166px' height='6px' progress={percent} bgColor='#FFFFFF' progressColor='#FFB98E' />
            </div>
            <button className={styles.submit}>ГОЛОСОВАТЬ</button>
        </div>
    )
}
