import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export function Home() {
  return (
    <div className="container">
      <Aside />
      <Main>
        <h1>Home</h1>
      </Main>
    </div>
  );
}
