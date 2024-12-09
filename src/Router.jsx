import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PageLogin } from './pages/PageLogin'
import { PageRegisterCompany } from './pages/PageRegisterCompany'

export function Router() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<PageLogin />} />
            <Route path='/company' element={< PageRegisterCompany />} />
        </Routes>
    )
}