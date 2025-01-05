import styles from './LoginForm.module.css'
import { CustomCheck } from './CustomCheck';
import { ForgetPsw } from './ForgetPsw';
import { FcpInfo } from './FcpInfo';

export function LoginForm() {
    return (
        <div className={styles.wrapper}>
            <form action="" className={styles.formLogin} >
                <h1>
                    Cadastro <span>Usuário</span>{" "}
                </h1>
                <div className={styles.inputBox}>
                    <input type="text" placeholder='Usuário' required />
                </div>
                <div className={styles.inputBox}>
                    <input type="password" placeholder='Senha' required />
                </div>
                <CustomCheck />
                <div className={styles.buttonLogin}>
                    <button type='submit'>ENTRAR</button>
                </div>
            </form>
            <ForgetPsw />
            <FcpInfo />
        </div>
    );
}