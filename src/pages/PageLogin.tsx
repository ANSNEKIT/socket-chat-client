import React, { EventHandler } from 'react'
import styles from '../styles/PageLogin.module.css'
import { Link } from 'react-router-dom'

const fields = {
    USER_NAME: 'userName',
    ROOM_ID: 'roomId',
}

const PageLogin = () => {
    const { USER_NAME, ROOM_ID } = fields
    const [values, setValues] = React.useState({ [USER_NAME]: '', [ROOM_ID]: '' })

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const evtTarget = evt.target as HTMLInputElement
        setValues({ ...values, [evtTarget.name]: evtTarget.value })
    }

    const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
        const hasEmpyValue = Object.values(values).some((key) => !key)
        if (hasEmpyValue) {
            evt.preventDefault()
        }
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Войти в чат</h1>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <input
                            type="text"
                            className={styles.input}
                            name="userName"
                            placeholder="Введите никнейм"
                            value={values[USER_NAME]}
                            autoComplete="off"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.group}>
                        <input
                            type="password"
                            className={styles.input}
                            name="roomId"
                            placeholder="Введите ID комнаты"
                            value={values[ROOM_ID]}
                            autoComplete="off"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <Link
                        className={styles.group}
                        to={`/chat?name=${values[USER_NAME]}&room=${values[ROOM_ID]}`}
                    >
                        <button type="submit" className={styles.button} onClick={handleClick}>
                            Войти
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default PageLogin
