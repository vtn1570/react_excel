import React from 'react'
import classes from '../../scss/Table.module.scss'

export const Table = () => {
    
    const CHAR_CODE = 65
    const createColumns = () => {
        const columns = new Array(26)
            .fill('')
            .map((_, index) => {
                return (
                    <div className={classes.column} key={index}>
                        {String.fromCharCode(CHAR_CODE + index)}
                    </div>
                )
            })
        return (<div className={classes.row}>
                <div className={classes.cell_info}></div>
                <div className={classes.row_data}>
                    {columns}
                </div>
            </div>)
    }

   const createTable = (num) => {
       const rows = new Array(num)
        .fill('')
        .map((_, index) => {
            return (
                <div className={classes.row} key={index}>
                <div className={classes.cell_info}>{index + 1}</div>
                <div className={classes.row_data}>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                </div>
            </div>
            )
        })

        return (
            createColumns(),
            rows
        )
   }

    return (
        <div className={classes.table}>
            {createTable(20)}
            {/* <div className={classes.row}>
                <div className={classes.cell_info}>1</div>
                <div className={classes.row_data}>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.cell_info}>2</div>
                <div className={classes.row_data}>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.cell_info}>3</div>
                <div className={classes.row_data}>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                    <div contentEditable className={classes.cell}></div>
                </div>
            </div> */}
        </div>
    )
}
