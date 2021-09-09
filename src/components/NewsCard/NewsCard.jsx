import React from 'react'
import styles from './NewsCard.module.scss';
import vector_7 from './../../images/vector_7.svg';
import newsBorder from './../../images/news_border.svg';

export default function NewsCard({ image, content }) {
    return (
        <div className={styles.newsCard}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.post}>
                <div className={styles.post__topic}>
                    <img src={vector_7} alt="" />
                    <h3 className={styles.post__heading}>Renaissance Role Play</h3>
                    <img src={vector_7} alt="" />
                </div>
                <p className={styles.post__content}>{content}</p>
            </div>
        </div>
    )
}
