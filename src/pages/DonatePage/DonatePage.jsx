import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from '../../components/Navbar/Navbar'
import styles from './DonatePage.module.scss'
import starterPack from './../../images/starter_pack.png';
import millionairePack from './../../images/millionaire_pack.png';
import richPack from './../../images/rich_pack.png';
import vector_15 from './../../images/vector_15.svg';
import vector_16 from './../../images/vector_16.svg';
import bronzeCase from './../../images/bronze_case.png';
import silverCase from './../../images/silver_case.png';
import goldenCase from './../../images/golden_case.png';
import sponsorCase from './../../images/sponsor_case.png';
import shoppingBasket from './../../images/shopping-basket.png';
import vector_13 from './../../images/vector_13.svg';
import vector_14 from './../../images/vector_14.svg';
import vector_14_mirror from './../../images/vector_14_mirror.svg';
import donationOptions from './../../data/donationOptions.json'
import Pack from './Pack/Pack';
import VipCase from './VipCase/VipCase';


export default function DonatePage() {
    const [disablePayment, setDisablePayment] = useState(true)
    const [donationAmount, setDonationAmount] = useState('')
    const [nickname, setNickname] = useState('')

    const addPriceToDonationAmount = addedPrice => setDonationAmount(Number(donationAmount) + addedPrice)

    return (
        <div className={styles.donatePage}>
            <Navbar />
            <div className={styles.wrapper}>
                <section className={styles.donationFormAndPacks}>
                    <div className={styles.donation}>
                        <form className={styles.donation__form}>
                            <div className={styles.formTopic}>
                                <img src={vector_14} alt="" />
                                <h1 className={styles.formTitle}>ДОНАТ</h1>
                                <img src={vector_14_mirror} alt="" />
                            </div>
                            <div className={styles.choseServer}>
                                <select className={`${styles.formField} ${styles.select}`} required>
                                    <option value="" selected disabled hidden>Выберите сервер</option>
                                    <option value="davinci">DaVinci</option>
                                </select>
                            </div>
                            <div className={styles.enterNickname}>
                                <input
                                    required
                                    type="text"
                                    name="nickname"
                                    placeholder="Введите никнейм"
                                    value={nickname}
                                    onInput={e => setNickname(e.target.value)}
                                    className={`${styles.formField} ${styles.input}`}
                                />
                            </div>
                            <div className={styles.chosePaymentType}>
                                <select className={`${styles.formField} ${styles.select}`} required>
                                    <option value="" selected disabled hidden>Выберите способ оплаты</option>
                                    <option value="card">- Visa, MasterCard, GooglePay, ApplePay, WebMoney, Maestro, СБЕРБАНК, Яндекс и прочие</option>
                                    <option value="qiwi">- QIWI</option>
                                </select>
                            </div>
                            <div className={styles.enterAmount}>
                                <input
                                    required
                                    type="number"
                                    name="amount"
                                    placeholder="Сумма"
                                    value={donationAmount}
                                    onInput={e => {
                                        setDonationAmount(e.target.value)
                                        console.log(donationAmount)
                                    }}
                                    className={`${styles.formField} ${styles.input}`}
                                />
                            </div>
                            <ReCAPTCHA
                                sitekey="6LdpG1kcAAAAAEpcrJF0Dyk-v4k-wz7bopUSissw"
                                onChange={() => setDisablePayment(false)}
                            />
                            <button
                                type="submit"
                                disabled={disablePayment}
                                className={styles.formSubmit}
                            >
                                <p>ОПЛАТИТЬ</p>
                                <img src={shoppingBasket} alt="" />
                            </button>
                        </form>
                    </div>
                    <div className={styles.offer}>
                        <div className={styles.offerTopic}>
                            <img src={vector_13} alt="" />
                            <h2>ЧТО МОЖНО КУПИТЬ?</h2>
                        </div>
                        <div className={styles.packs}>
                            <Pack
                                pack={donationOptions.packs[0]}
                                image={starterPack}
                                className={styles.starterPack}
                                addPriceToDonationAmount={addPriceToDonationAmount}
                            />
                            <Pack
                                pack={donationOptions.packs[1]}
                                image={millionairePack}
                                className={styles.millionairePack}
                                addPriceToDonationAmount={addPriceToDonationAmount}
                            />
                            <Pack
                                pack={donationOptions.packs[2]}
                                image={richPack}
                                className={styles.richPack}
                                addPriceToDonationAmount={addPriceToDonationAmount}
                            />
                        </div>
                        <b className={styles.note}><i>Для активации стартовых пакетов и VIP статусов активируйте ключ /donate в игре!</i></b>
                    </div>
                </section>
                <section className={styles.vipCases}>
                    <div className={styles.vipCases__topic}>
                        <img src={vector_15} alt="" />
                        <h2 className={styles.vipCases__title}>VIP</h2>
                        <img src={vector_16} alt="" />
                    </div>
                    <div className={styles.cases}>
                        <VipCase
                            vipCase={donationOptions.vipCases[0]}
                            image={bronzeCase}
                            addPriceToDonationAmount={addPriceToDonationAmount}
                        />
                        <VipCase
                            vipCase={donationOptions.vipCases[1]}
                            image={silverCase}
                            addPriceToDonationAmount={addPriceToDonationAmount}
                        />
                        <VipCase
                            vipCase={donationOptions.vipCases[2]}
                            image={goldenCase}
                            addPriceToDonationAmount={addPriceToDonationAmount}
                        />
                        <VipCase
                            vipCase={donationOptions.vipCases[3]}
                            image={sponsorCase}
                            addPriceToDonationAmount={addPriceToDonationAmount}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
