import { useNavigate } from 'react-router-dom'
import chat from './chatBody.module.css'
import { ISendMessage } from '../../interfaces'


interface IChatBody {
    messages: ISendMessage[]
    me: string
    room: string
}

const ChatBody = ({ messages, me, room }: IChatBody) => {        
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <>
            <header className={chat.header}>
                <h2 className={chat.title}>Комната: {room}</h2>
                <button className={chat.logoutBtn} onClick={handleLogout}>
                    Покинуть чат
                </button>
            </header>

            <div className={chat.container}>
                { messages.length > 0 && messages.map(({user, message, socketId}) => (
                    <div key={socketId} className={`${chat.message} ${user.nickname === me ? chat.messageMe : ''}`}>
                        <p className={chat.nickname}>{user.nickname === me ? 'Вы': user.nickname}</p>
                        <div className={chat.messageTextWrap}>
                            <p className={chat.messageText}>{message}</p>
                        </div>
                    </div>
                )) }
            </div>
        </>
    )
}

export default ChatBody
