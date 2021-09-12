import React from 'react'
import styles from './Pack.module.scss'

export default function Pack({ pack, image, className, addPriceToDonationAmount }) {
    return (
        <div className={`${styles.pack} ${className}`}>
            <img src={image} alt={pack.name} />
            <b className={styles.pack__name}>{pack.name}</b>
            <ul className={styles.pack__list}>
                {pack.offer.map(option => <li>- {option}</li>)}
            </ul>
            <button
                className={styles.pack__button}
                onClick={() => addPriceToDonationAmount(pack.price)}
            >
                <span className={styles.price}>{pack.price} </span>
                Руб.
            </button>
        </div>
    )
}
