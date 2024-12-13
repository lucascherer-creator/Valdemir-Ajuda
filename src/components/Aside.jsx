import styles from './Aside.module.css'
import { Link } from 'react-router-dom'


export function Aside() {
    return (
        <aside className={styles.sidebar} >
            <div >
                <ul>
                    <li>
                        <Link to="/produtos">
                            <i className='bx bx-customize'></i>
                            <span>Produtos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/company">
                            <i className='bx bxs-doughnut-chart'></i>
                            <span>Empresas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/empresa">
                            <i className='bx bxs-group'></i>
                            <span>Representantes</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside >
    )
}
