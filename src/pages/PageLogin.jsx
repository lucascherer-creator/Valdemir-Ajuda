import { LoginForm } from "../components/LoginForm"
import { ForgetPsw } from "../components/ForgetPsw"
import { FcpInfo } from "../components/FcpInfo"

export function PageLogin() {
    return (
        <div>
            <LoginForm />
            <ForgetPsw />
            <FcpInfo />
        </div>

    )
}