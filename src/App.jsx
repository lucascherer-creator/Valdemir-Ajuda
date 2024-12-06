import { ForgetPsw } from './components/ForgetPsw';
import { LoginForm } from './components/LoginForm';
import { FcpInfo } from './components/FcpInfo';
import './index.css';

export function App() {
    return (
        <div>
            <LoginForm />
            <ForgetPsw />
            <FcpInfo />
        </div>
    )
}
