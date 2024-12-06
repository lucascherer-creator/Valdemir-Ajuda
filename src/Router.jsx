import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'

export function Router() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/history' element={<History />} />
        </Routes>
    )
}