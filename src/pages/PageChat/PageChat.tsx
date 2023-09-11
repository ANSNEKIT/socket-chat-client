import React from 'react'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'
import ChatSidebar from '../../components/ChatSidebar/ChatSidebar'
import ChatBody from '../../components/ChatBody/ChatBody'
import classes from './pageChat.module.css'
import AddMessage from '../../components/AddMessage/AddMessage'
import { ISendMessage } from '../../interfaces'

interface IParams {
    nickname: string
    room: string
}

const socket = io('http://localhost:5000')

const PageChat = () => {
    const { search } = useLocation()
    const [users, setUsers] = React.useState<string[]>([])
    const [params, setParams] = React.useState<IParams>({ room: '', nickname: '' })
    const [messages, setMessages] = React.useState<ISendMessage[] | []>([])
    const me = params.nickname

    React.useEffect(() => {
        socket.on('room', ({ data }) => {
            setUsers([...data.users])
        })
    }, [])

    React.useEffect(() => {
        socket.on('message', ({ data }) => {
            setMessages((_state) => [..._state, data])
        })
    }, [])

    React.useEffect(() => {
        const searchParams: unknown = Object.fromEntries(new URLSearchParams(search))
        setParams(searchParams as IParams)
        socket.emit('join', searchParams)
    }, [search])

    return (
        <div className={classes.container}>
            <ChatSidebar users={users} me={me} />
            <main className={classes.chatMain}>
                <ChatBody messages={messages} me={me} room={params.room} />
                <AddMessage socket={socket} params={params} />
            </main>
        </div>
    )
}

export default PageChat
