import { CadastroRep } from "../components/CadastroRep";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function PageRegisterCompany() {
    return (
        <div className="container">
            <Aside />
            <Main>
                <CadastroRep />
            </Main>
        </div>
    )
}