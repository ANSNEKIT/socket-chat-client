import React from 'react'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'
import ChatSidebar from '../../components/ChatSidebar/ChatSidebar'
import ChatBody from '../../components/ChatBody/ChatBody'
import classes from './pageChat.module.css'
import AddMessage from '../../components/AddMessage/AddMessage'

interface IParams {
    name: string
    room: string
}

const socket = io('http://localhost:5000')
console.log(111, socket)

const PageChat = () => {
    const users = ["Вася 1", "Дуся 1"]
    const { search } = useLocation()
    const [params, setParams] = React.useState<IParams | null>(null)

    React.useEffect(() => {
        const paramsFromEntries: unknown = Object.fromEntries(new URLSearchParams(search))
        setParams(paramsFromEntries as IParams)
        socket.emit('join', paramsFromEntries)
    }, [search])

    return (
        <div className={classes.container}>
            <ChatSidebar users={users}/>
            <main className={classes.chatMain}>
                <ChatBody />
                <AddMessage />
            </main>
        </div>
    )
}

export default PageChat
