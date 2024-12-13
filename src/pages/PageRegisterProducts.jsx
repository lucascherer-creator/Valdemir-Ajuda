import { RegisterProducts } from "../components/RegisterProducts";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function PageRegisterProducts() {
    return (
        <div className="container">
            <Aside />
            <Main>
                <RegisterProducts />
            </Main>
        </div>
    )
}