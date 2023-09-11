import sidebar from './chatSidebar.module.css'

interface IChatSidebar {
    users: string[]
    me: string
}

const ChatSidebar = ({ users, me }: IChatSidebar) => {
  return (
    <aside className={sidebar.sidebar}>
        <h4 className={sidebar.title}>Пользователи:</h4>
        <ul className={sidebar.list}>
            { 
                users.map((user, idx) => (
                    <li 
                        key={`${idx}-${Math.floor(Math.random() * 1000000)}`} 
                        className={`${sidebar.user} ${user === me ? sidebar.userMe : ''}`}
                    >{ user }</li>
                ))
            }
        </ul>
    </aside>
  )
}

export default ChatSidebar