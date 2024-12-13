import { CadastroEmpresa } from "../components/CadastroEmpresa"
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function PageRegisterEmpresa() {
    return (
        <div className="container">
            <Aside />
            <Main>
                <CadastroEmpresa />
            </Main>
        </div>
    )
}