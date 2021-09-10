import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from '../../components/Navbar/Navbar'
import styles from './DonatePage.module.scss'
import starterPack from './../../images/starter_pack.png';
import millionairePack from './../../images/millionaire_pack.png';
import richPack from './../../images/rich_pack.png';
import vector_15 from './../../images/vector_15.svg';
import vector_16 from './../../images/vector_16.svg';
import caseVectorLeft from './../../images/case_vector_left.svg';
import caseVectorRight from './../../images/case_vector_right.svg';
import bronzeCase from './../../images/bronze_case.png';
import silverCase from './../../images/silver_case.png';
import goldenCase from './../../images/golden_case.png';
import sponsorCase from './../../images/sponsor_case.png';
import shoppingBasket from './../../images/shopping-basket.png';


export default function DonatePage() {
    const [disablePayment, setDisablePayment] = useState(true)

    return (
        <div className={styles.donatePage}>
            <Navbar />
            <div className={styles.wrapper}>
                <section className={styles.donationFormAndPacks}>
                    <div className={styles.donation}>
                        <form className={styles.donation__form}>
                            <h1 className={styles.firmTitle}>ДОНАТ</h1>
                            <div className={styles.choseServer}>
                                <select className={`${styles.formField} ${styles.select}`} required>
                                    <option value="" selected disabled hidden>Выберите сервер</option>
                                    <option value="test">Test</option>
                                </select>
                            </div>
                            <div className={styles.enterNickname}>
                                <input
                                    required
                                    type="text"
                                    name="nickname"
                                    placeholder="Введите никнейм"
                                    className={`${styles.formField} ${styles.input}`}
                                />
                            </div>
                            <div className={styles.chosePaymentType}>
                                <select className={`${styles.formField} ${styles.select}`} required>
                                    <option value="" selected disabled hidden>Выберите способ оплаты</option>
                                    <option value="card">Visa, MasterCard, GooglePay, ApplePay, WebMoney, Maestro, СБЕРБАНК, Яндекс и прочие</option>
                                    <option value="qiwi">QIWI</option>
                                </select>
                            </div>
                            <div className={styles.enterAmount}>
                                <input
                                    required
                                    type="text"
                                    name="amount"
                                    placeholder="Сумма"
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
                                <p>Оплатить</p>
                                <img src={shoppingBasket} alt="" />
                            </button>
                        </form>
                    </div>
                    <div className={styles.offer}>
                        <h2>ЧТО МОЖНО КУПИТЬ?</h2>
                        <div className={styles.packs}>
                            <div className={styles.pack}>
                                <img src={starterPack} alt="starter pack" />
                                <b>Пакет “Стартовый”</b>
                                <ul>
                                    <li>$500 000</li>
                                    <li>Лицензия на авто</li>
                                    <li>Законопослушность +50 </li>
                                    <li>3 дня Bronze VIP</li>
                                </ul>
                                <button>350 Руб.</button>
                            </div>
                            <div className={styles.pack}>
                                <img src={millionairePack} alt="starter pack" />
                                <b>Пакет “Миллионер”</b>
                                <ul>
                                    <li>$1 000 000</li>
                                    <li>Лицензия на авто </li>
                                    <li>Законопослушность +50</li>
                                    <li>50% ко всем скиллам</li>
                                    <li>3 дня х2 EXP</li>
                                    <li>5 дней Silver VIP</li>
                                </ul>
                                <button>650 Руб.</button>
                            </div>
                            <div className={styles.pack}>
                                <img src={richPack} alt="starter pack" />
                                <b>Пакет “Богач”</b>
                                <ul>
                                    <li>$2 000 000</li>
                                    <li>Лицензия на авто</li>
                                    <li>Законопослушность +50</li>
                                    <li>100% всех скиллов</li>
                                    <li>Все лицензии </li>
                                    <li>5 дней х2 EXP</li>
                                    <li>7 дней Gold VIP</li>
                                </ul>
                                <button>1400 Руб.</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.vipCases}>
                    <div className={styles.vipCases__topic}>
                        <img src={vector_15} alt="" />
                        <h2 className={styles.vipCases__title}>VIP</h2>
                        <img src={vector_16} alt="" />
                    </div>
                    <div className={styles.cases}>
                        <div className={styles.case}>
                            <img src={bronzeCase} alt="bronze case" />
                            <div>
                                <img src={caseVectorLeft} alt="" />
                                <h3>BRONZE</h3>
                                <img src={caseVectorRight} alt="" />
                            </div>
                            <ul>
                                <li>Каждый третий PayDay +1 exp</li>
                                <li>Ускоренно лечение в два раза</li>
                                <li>Ускоренная прокачка навыка на работах</li>
                                <li>Возможность оплачивать дом на 30 дней</li>
                            </ul>
                            <div>
                                <p>МЕСЯЦ:</p>
                                <p>3 МЕСЯЦА:</p>
                                <p>6 МЕСЯЦЕВ:</p>
                            </div>
                            <div>
                                <p>200 Руб.</p>
                                <p>350 Руб.</p>
                                <p>560 Руб.</p>
                            </div>
                            <button>КУПИТЬ</button>
                        </div>
                        <div className={styles.case}>
                            <img src={silverCase} alt="silver case" />
                            <div>
                                <img src={caseVectorLeft} alt="" />
                                <h3>SILVER</h3>
                                <img src={caseVectorRight} alt="" />
                            </div>
                            <ul>
                                <li>Все преимущества Bronze VIP</li>
                                <li>Ускоренная прокачка скиллов на оружие (х2)</li>
                                <li>Каждый второй PayDay +1 exp</li>
                                <li>Уровень голода сокращается  в два раза медленнее</li>
                                <li>Возможность владеть двумя домами</li>
                                <li>Уменьшенный налог на оплату дома</li>
                                <li>Скидка 50% на оплату автомобильных штрафов</li>
                            </ul>
                            <div>
                                <p>МЕСЯЦ:</p>
                                <p>3 МЕСЯЦА:</p>
                                <p>6 МЕСЯЦЕВ:</p>
                            </div>
                            <div>
                                <p>300 Руб.</p>
                                <p>625 Руб.</p>
                                <p>1000 Руб.</p>
                            </div>
                            <button>КУПИТЬ</button>
                        </div>
                        <div className={styles.case}>
                            <img src={goldenCase} alt="golden case" />
                            <div>
                                <img src={caseVectorLeft} alt="" />
                                <h3>GOLD</h3>
                                <img src={caseVectorRight} alt="" />
                            </div>
                            <ul>
                                <li>Все преимущества Bronze / Sliver VIP</li>
                                <li>Возможность владеть тремя домами</li>
                                <li>Возможность владеть двумя бизнесами</li>
                                <li>Каждый PayDay +1 EXP</li>
                                <li>VIP чат</li>
                                <li>Возможность выбора больницы для лечения</li>
                                <li>Скидка 50% на оплату автомобильных штрафов</li>
                                <li>Скидка на создание семьи на -50%</li>
                                <li>Снижение срока наказания в тюрьме на -50%</li>
                            </ul>
                            <div>
                                <p>МЕСЯЦ:</p>
                                <p>3 МЕСЯЦА:</p>
                                <p>6 МЕСЯЦЕВ:</p>
                            </div>
                            <div>
                                <p>500 Руб.</p>
                                <p>1250 Руб.</p>
                                <p>2000 Руб.</p>
                            </div>
                            <button>КУПИТЬ</button>
                        </div>
                        <div className={styles.case}>
                            <img src={sponsorCase} alt="sponsor case" />
                            <div>
                                <img src={caseVectorLeft} alt="" />
                                <h3>SPONSOR</h3>
                                <img src={caseVectorRight} alt="" />
                            </div>
                            <ul>
                                <li>Все преимущества Gold VIP</li>
                                <li>Продлевать VIP статус не нужно</li>
                                <li>Первые 150 человек получат уникальный аксессуар</li>
                                <li>Первые 150 человек получат уникальный автомобиль</li>
                                <li>Владелец подписки получает уникальный кейс</li>
                                <li>Возможность иметь авто без дома</li>
                                <li>Стоимость отправки объявления в 2 раза меньше</li>
                                <li>Открытие дополнительной страницы инвентаря</li>
                                <li>Получение 1-го донат поинта в час (кешбек 600)</li>
                                <li>Возможность передавать до 50.000$ через /pay</li>
                                <li>Вы теряете уровень розыска в 2 раза быстрее</li>
                                <li>Уникальный префикс в VIP чате до 6 символов</li>
                                <li>Возможность самому уволится из фракции</li>
                                <li>Возможность повторной отправки репорта без КД</li>
                                <li>Комиссия в казино меньше в 2 раза</li>
                                <li>Лицензии навсегда</li>
                                <li>Все скиллы на оружие</li>
                                <li>Возможность получения роли в дискорде</li>
                                <li>Возможность получения роли на форуме</li>
                                <li>Возможность установить мультимедиа в подпись на форуме</li>
                            </ul>
                            <div>
                                <p>5000 Руб.</p>
                            </div>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
