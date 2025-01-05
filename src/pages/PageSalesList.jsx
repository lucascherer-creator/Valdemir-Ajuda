import { SalesList } from "../components/SalesList";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function PageSalesList() {
    return (
        <div className="container">
            <Aside />
            <Main>
                <SalesList />
            </Main>
        </div>
    )
}