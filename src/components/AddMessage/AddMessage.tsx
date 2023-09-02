import React from 'react'
import classes from './addMessage.module.css'

const AddMessage = () => {
  return (
    <div className={classes.container}>
        <form className={classes.form}>
            <input className={classes.input} type="text" />
            <button type="button" className={classes.submitBtn}>Отправить</button>
        </form>
    </div>
  )
}

export default AddMessage