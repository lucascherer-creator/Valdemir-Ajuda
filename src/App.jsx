import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';


import { ForgetPsw } from './components/ForgetPsw';
import { LoginForm } from './components/LoginForm';
import { FcpInfo } from './components/FcpInfo';
import './index.css';

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Router />
                <LoginForm />
                <ForgetPsw />
                <FcpInfo />
            </BrowserRouter>
        </div>
    )
}
