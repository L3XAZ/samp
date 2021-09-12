import React from 'react'
import styles from './VipCase.module.scss'
import caseVectorLeft from './../../../images/case_vector_left.svg';
import caseVectorRight from './../../../images/case_vector_right.svg';

export default function VipCase({ vipCase, image, className, addPriceToDonationAmount }) {
    return (
        <div className={`${styles.case} ${className}`}>
            <img src={image} alt={vipCase.name} />
            <div className={styles.case__topic}>
                <img src={caseVectorLeft} alt="" />
                <h3 className={styles.case__name}>{vipCase.name}</h3>
                <img src={caseVectorRight} alt="" />
            </div>
            <ul className={styles.case__list}>
                {vipCase.offer.map(option => <li>{option}</li>)}
            </ul>
            {vipCase.name !== "SPONSOR" &&
                <div className={styles.case__time}>
                    <p>МЕСЯЦ:</p>
                    <p>3 МЕСЯЦА:</p>
                    <p>6 МЕСЯЦЕВ:</p>
                </div>
            }
            <div className={styles.case__price}>
                {vipCase.prices.map(price =>
                    <button
                        className={styles.priceButton}
                        onClick={() => addPriceToDonationAmount(price)}
                    >
                        <span className={styles.price}>{price} </span>
                        Руб.
                    </button>
                )}
            </div>
        </div >
    )
}