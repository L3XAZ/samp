import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './AccountPage.module.scss'

export default function AccountPage() {
    return (
        <div className={styles.accountPage}>
            <Navbar />
            <div className={styles.container}>
                <h1>В процессе разработки</h1>
            </div>
        </div>
    )
}
