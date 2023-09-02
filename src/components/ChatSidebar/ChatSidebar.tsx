import sidebar from './chatSidebar.module.css'

interface IChatSidebar {
    users: string[]
}

const ChatSidebar = ({ users }: IChatSidebar) => {
  return (
    <aside className={sidebar.sidebar}>
        <h4 className={sidebar.title}>Пользователи:</h4>
        <ul className={sidebar.list}>
            <li className={sidebar.user}>Вася</li>
            <li className={sidebar.user}>Петя</li>
            <li className={sidebar.user}>Миша</li>
            <li className={sidebar.user}>Гена</li>
            <li className={sidebar.user}>Маша</li>
            <li className={sidebar.user}>Дуся</li>
            <li className={sidebar.user}>Муся</li>
        </ul>
    </aside>
  )
}

export default ChatSidebar