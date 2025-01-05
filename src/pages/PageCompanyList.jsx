import { CompanyList } from "../components/CompanyList";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function PageCompanyList() {
    return (
        <div className="container">
            <Aside />
            <Main>
                <CompanyList />
            </Main >
        </div>
    )
}