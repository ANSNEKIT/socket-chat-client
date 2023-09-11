import React, { ChangeEvent, MouseEvent } from 'react'
import classes from './addMessage.module.css'
import { Socket } from 'socket.io-client'

interface IAddMessage {
    socket: Socket
    params: { room: string, nickname: string }
}

const AddMessage = ({ socket, params }: IAddMessage) => {
    const [message, setMessage] = React.useState('')

    const handleMessage = (evt: ChangeEvent<HTMLInputElement>) => {
        const evtTarget = evt.target as HTMLInputElement
        setMessage(evtTarget.value)
    }

    const handleSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();

        if (message.trim()) {
            socket.emit('sendMessage', {
                message,
                params,
                socketId: `${socket.id}-${Math.floor(Math.random() * 10000)}`
            })
        }
        
        setMessage('')
    }

    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <input
                    className={classes.input}
                    type="text"
                    value={message}
                    autoComplete="off"
                    onChange={handleMessage}
                />
                <button type="submit" className={classes.submitBtn} onClick={handleSubmit}>Отправить</button>
            </form>
        </div>
    )
}

export default AddMessage