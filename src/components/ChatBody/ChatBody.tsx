import chat from './chatBody.module.css'

const ChatBody = () => {
  return (
    <>
        <header className={chat.header}>
            <button className={chat.logoutBtn}>Покинуть чат</button>
        </header>
        <div className={chat.container}>
            <div className={chat.message}>
                <p className={chat.nickname}>Вася</p>
                <div className={chat.messageTextWrap}>
                    <p className={chat.messageText}>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className={`${chat.message} ${chat.messageMe}`}>
                <p className={chat.nickname}>Вася</p>
                <div className={chat.messageTextWrap}>
                    <p className={chat.messageText}>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChatBody