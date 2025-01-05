import { RegisterRepr } from "../components/RegisterRepr";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function PageRegisterRepr() {
  return (
    <div className="container">
      <Aside />
      <Main>
        <RegisterRepr />
      </Main>
    </div>
  );
}
