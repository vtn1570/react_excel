import React from 'react'
import classes from '../../scss/Toolbar.module.scss'

export const Toolbar = () => {
    const icons = [
    'format_align_left', 
    'format_align_center', 
    'format_align_right', 
    'format_bold', 
    'format_italic',
    'format_underlined'
]

    const toolbar_template = () => {
        return icons.map((icon, index) => {
                return (
                <div className={classes.button} key={index}>
                    <i className="material-icons">{icon}</i>
                </div>
                )
            }
        )
    }

    return (
        <div className={classes.toolbar}>
            {toolbar_template()}
        </div>
    )
}