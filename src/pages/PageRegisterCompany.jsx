import { RegisterCompany } from "../components/RegisterCompany"
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function PageRegisterCompany() {
    return (
        <div className="container">
            <Aside />
            <Main>
                <RegisterCompany />
            </Main>
        </div>
    )
}