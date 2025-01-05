import styles from "./Aside.module.css";
import { Link } from "react-router-dom";

export function Aside() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/home">
            <i className="bx bx-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/produtos">
            <i className="bx bx-customize"></i>
            <span>Produtos</span>
          </Link>
        </li>
        <li>
          <Link to="/empresa">
            <i className="bx bxs-doughnut-chart"></i>
            <span>Empresas</span>
          </Link>
        </li>
        <li>
          <Link to="/representante">
            <i className="bx bxs-group"></i>
            <span>Representantes</span>
          </Link>
        </li>
        <li>
          <Link to="/listagem-empresas">
            <i className="bx bxs-group"></i>
            <span>Listagem Empresas</span>
          </Link>
        </li>
        <li>
          <Link to="/listagem-vendas">
            <i className="bx bxs-group"></i>
            <span>Listagem Vendas</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
