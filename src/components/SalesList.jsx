import styles from "./SalesList.module.css"

export function SalesList() {
    return (
        <form action="" className={styles.form}>
            <header>
                <h1>
                    Listagem <span>Vendas</span>{" "}
                </h1>
            </header>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <label htmlFor="namePir">
                            Data Inicial
                        </label>
                        <input type="date" id="company" name="company" />
                    </div>
                    <div className={styles.flex2}>
                        <label htmlFor="namePir">
                            Data Final
                        </label>
                        <input type="date" id="company" name="company" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <label htmlFor="namePir">
                            Tipo de Período
                        </label>
                        <select name="" id="">
                            <option value="">Data de Emissão</option>
                            <option value="">Data de Entrega</option>
                        </select>
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <label htmlFor="namePir">
                            Empresa
                        </label>
                        <input type="text" id="company" name="company" />
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