import React, { Fragment } from 'react'
import { useAlert } from "react-alert";

export default function UnavailablePage({ className }) {
    const alert = useAlert();

    return (
        <Fragment>
            <div
                className={className}
                onClick={() => {
                    alert.show("Страница процессе разработки")
                }}
            >
                ЛИЧНЫЙ КАБИНЕТ
            </div>
        </Fragment>
    )
}
