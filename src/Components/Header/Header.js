import React from 'react'
import classes from '../../scss/Header.module.scss'

export const Header = () => {
    return (
    <div className={classes.header}>
        <input type="text" className={classes.input} defaultValue="Новая таблица" />

        <div>
            <div className={classes.button} data-button="remove">
                <i className="material-icons" data-button="remove">delete</i>
            </div>

            <div className={classes.button} data-button="exit">
                <i className="material-icons" data-button="exit">exit_to_app</i>
            </div>
        </div>
    </div>
    )
}