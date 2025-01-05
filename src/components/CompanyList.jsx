import styles from "./CompanyList.module.css";
import { States } from "./States"

export function CompanyList() {

    const states = States()

    return (
        <form action="" className={styles.form}>
            <header>
                <h1>
                    Listagem <span>Empresa</span>{" "}
                </h1>
            </header>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <label htmlFor="namePir">
                            Estado
                        </label>
                        <select name="" id="">
                            {states.map((state) => (
                                <option key={state.sigla} value={state.sigla}>
                                    {state.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2} >
                        <label htmlFor="nameCompany">
                            Cidade
                        </label>
                        <input type="text" id="company" name="company" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex1}>
                        <label htmlFor="namePir">
                            Representante
                        </label>
                        <input type="text" d="company" name="company" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2} >
                        <label htmlFor="nameCompany">
                            Preposto
                        </label>
                        <input type="text" id="company" name="company" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex1}>
                        <label htmlFor="namePir">
                            Situação
                        </label>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className={styles.flex2} >
                        <label htmlFor="nameCompany">
                            Especialização
                        </label>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div className={`${styles.flex1} ${styles.inputLider}  `}>
                        <label htmlFor="useName">
                            Agrupar por Empresa Líder
                        </label>
                        <input type="checkbox" id="useName" name="useName" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.fieldsetButton}>
                <div className={styles.flex}>
                    <div>
                        <button className={styles.greenButton}>Emitir</button>
                    </div>
                    <div>
                        <button className={styles.redButton}>Descartar</button>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}