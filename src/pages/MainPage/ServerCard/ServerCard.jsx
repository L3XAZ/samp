import React, { Fragment } from 'react'
import Progressbar from '../../../components/Progressbar/Progressbar'
import styles from './ServerCard.module.scss'
import { useAlert } from "react-alert";

export default function ServerCard({ name, address, visitors }) {
    const alert = useAlert();

    return (
        <Fragment>
            <button
                className={styles.serverCard}
                onClick={() => {
                    navigator.clipboard.writeText(address)
                    alert.show("Ссылка успешно скопирована!")
                }}
            >
                <h3 className={styles.serverName}>{name}</h3>
                <p className={styles.serverAddress}>{address}</p>
                <div className={styles.attendance}>
                    <p className={styles.serverVisitors}>{visitors}/1000</p>
                    <Progressbar width='224px' height='3px' progress={visitors / 10} bgColor='#FFFFFF' progressColor='#FB6003' />
                </div>
            </button>
        </Fragment>
    )
}
