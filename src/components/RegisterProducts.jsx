import styles from './RegisterProducts.module.css'
import InputMask from "react-input-mask";


export function RegisterProducts() {
    return (
        <form action="" className={styles.form}>
            <header>
                <h1>
                    Cadastro <span> Produtos</span>
                </h1>
            </header>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex1}>
                        <label htmlFor="company">
                            Código Pedido:{" "}
                        </label>
                        <input type="text" id="company" name="company" />
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="useName">
                            Cliente
                        </label>
                        <input type="text" id="useName" name="useName" />
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="namePir">
                            Grupo Líder
                        </label>
                        <input type="text" id="namePir" name="namePir" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex1}>
                        <label htmlFor="tipoRepr">
                            Data Emissão
                        </label>
                        <input type="date" id="tipoRepr" name="tipoRepr" />
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="irff">
                            Data de Entrega
                        </label>
                        <input type="date" id="irff" name="irff" />
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="company">
                            Data Embarque{" "}
                        </label>
                        <input type="date" id="company" name="company" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <label htmlFor="inicioVendas">
                            Pedido Cliente
                        </label>
                        <input type="text" id="inicioVendas" name="inicioVendas" />
                    </div>
                    <div className={styles.flex2}>
                        <label htmlFor="tipoMercado">
                            Tipo de Pedido
                        </label>
                        <select name="" id="">
                            <option value="1">Pronta-Entrega</option>
                            <option value="2">Pronta-Entrega</option>
                            <option value="3">Pronta-Entrega</option>
                        </select>
                    </div>
                    <div className={`${styles.flex1} ${styles.inputLider}  `}>
                        <p>Pedido PIR: <strong>9999999</strong> </p>
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <label htmlFor="representandeLider">
                            Representante{" "}
                        </label>
                        <input type="text" id="representandeLider" name="representandeLider" />
                    </div>
                    <div className={styles.flex2}>
                        <label htmlFor="regiaoVenda">
                            Comissão Repr.
                        </label>
                        <input type="text" id="regiaoVenda" name="regiaoVenda" />
                    </div>
                    <div className={styles.flex2}>
                        <label htmlFor="regiaoCota">
                            Preposto
                        </label>
                        <input type="text" id="regiaoCota" name="regiaoCota" />
                    </div>
                    <div className={styles.flex2}>
                        <label htmlFor="regiaoCota">
                            Comissão Prep.
                        </label>
                        <input type="text" id="regiaoCota" name="regiaoCota" />
                    </div>
                    <div className={styles.flex2}>
                        <label htmlFor="representandeLider">
                            Pedido Repr.{" "}
                        </label>
                        <input type="text" id="representandeLider" name="representandeLider" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <label htmlFor="representandeLider">
                            Cond. Pagamento{" "}
                        </label>
                        <input type="text" id="representandeLider" name="representandeLider" />
                    </div>
                    <div className={styles.flex2}>
                        <label htmlFor="regiaoVenda">
                            Prazos
                        </label>
                        <div className={styles.flex} >
                            <input type="number" id="regiaoVenda" name="regiaoVenda" />
                            <input type="number" id="regiaoVenda" name="regiaoVenda" />
                            <input type="number" id="regiaoVenda" name="regiaoVenda" />
                            <input type="number" id="regiaoVenda" name="regiaoVenda" />
                            <input type="number" id="regiaoVenda" name="regiaoVenda" />
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>

                <div className={styles.flex}>
                    <div className={styles.flex2}>
                        <legend>Bonificação</legend>
                        <div className={`${styles.flex} ${styles.flexAlignInputs}`}>
                            <label htmlFor="representandeLider">
                                (%)
                            </label>
                            <input type="text" id="representandeLider" name="representandeLider" />
                            <label htmlFor="representandeLider">
                                Valor
                            </label>
                            <input type="text" id="representandeLider" name="representandeLider" />
                        </div>
                    </div>
                    <div className={styles.flex2}>
                        <legend>Desconto Duplicata</legend>
                        <div className={`${styles.flex} ${styles.flexAlignInputs}`}>
                            <label htmlFor="representandeLider">
                                (%)
                            </label>
                            <input type="text" id="representandeLider" name="representandeLider" />
                            <label htmlFor="representandeLider">
                                Valor
                            </label>
                            <input type="text" id="representandeLider" name="representandeLider" />
                        </div>
                    </div>
                    <div className={styles.flex2}>
                        <legend>Acréscimos por Par</legend>
                        <div className={`${styles.flex} ${styles.flexAlignInputs}`}>
                            <label htmlFor="representandeLider">
                                (%)
                            </label>
                            <input type="text" id="representandeLider" name="representandeLider" />
                            <label htmlFor="representandeLider">
                                Valor
                            </label>
                            <input type="text" id="representandeLider" name="representandeLider" />
                        </div>
                    </div>

                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex1}>
                        <label htmlFor="tipoRepr">
                            Transportadora
                        </label>
                        <input type="text" id="tipoRepr" name="tipoRepr" />
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="irff">
                            Tipo Frete
                        </label>
                        <select name="" id="">
                            <option value="">CIF</option>
                            <option value="">CIF</option>
                            <option value="">CIF</option>
                        </select>
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="company">
                            Consignatário
                        </label>
                        <input type="text" id="company" name="company" />
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="company">
                            Pago Até
                        </label>
                        <input type="text" id="company" name="company" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.inputBox}>
                <div className={styles.flex}>
                    <div className={styles.flex1}>
                        <label htmlFor="tipoRepr">
                            Tabela de Preço
                        </label>
                        <input type="text" id="tipoRepr" name="tipoRepr" />
                    </div>
                    <div className={styles.flex1}>
                        <label htmlFor="company">
                            Desconto Preço
                        </label>
                        <input type="text" id="company" name="company" />
                    </div>
                </div>
            </fieldset>
            <fieldset className={styles.checkWrapper}>
                <div>
                    <label htmlFor="geraCota">Liberado para Faturamento</label>
                    <input type="checkbox" id="geraCota" name="geraCota" value="ativo" />
                </div>
                <div>
                    <label htmlFor="controlaCota">Pedido Juntado</label>
                    <input type="checkbox" id="controlaCota" name="controlaCota" value="ativo" />
                </div>
                <div>
                    <label htmlFor="geraEdi"><br />Romaneio</label>
                    <input type="checkbox" id="geraEdi" name="geraEdi" value="ativo" />
                </div>
            </fieldset>
        </form >
    )
}