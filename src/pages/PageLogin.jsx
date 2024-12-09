import { LoginForm } from "../components/LoginForm"
import { ForgetPsw } from "../components/ForgetPsw"
import { CustomCheck } from "../components/CustomCheck"
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