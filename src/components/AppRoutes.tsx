import { Routes, Route } from 'react-router-dom'
import PageLogin from '../pages/PageLogin/PageLogin'
import PageChat from '../pages/PageChat/PageChat'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/chat" element={<PageChat />} />
        </Routes>
    )
}

export default AppRoutes
