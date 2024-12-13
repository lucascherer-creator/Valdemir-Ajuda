import styles from './CadastroEmpresa.module.css'
import InputMask from 'react-input-mask';

export function CadastroEmpresa() {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <header>
                    <h1>Cadastro <span>Empresa</span> </h1>
                </header>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex1}>
                            <label htmlFor="company">Razão Social <span>*</span> </label>
                            <input type="text" id="company" name="company" />
                        </div>
                        <div className={styles.flex1}>
                            <label htmlFor="useName">Nome Fantasia <span>*</span></label>
                            <input type="text" id="useName" name="useName" />
                        </div>
                        <div className={styles.flex1}>
                            <label htmlFor="namePir">Tipo (F/J)<span>*</span></label>
                            <select name="" id="">
                                <option value="">Pessoa Jurídica</option>
                                <option value="">Pessoa Física</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset className={`${styles.checkWrapper} $ `}>
                    <div>
                        <label htmlFor="geraCota">Cliente</label>
                        <input type="checkbox" id="geraCota" name="geraCota" value="ativo" />
                    </div>
                    <div>
                        <label htmlFor="controlaCota">Representante</label>
                        <input type="checkbox" id="controlaCota" name="controlaCota" value="ativo" />
                    </div>
                    <div>
                        <label htmlFor="geraEdi">Fornecedor</label>
                        <input type="checkbox" id="geraEdi" name="geraEdi" value="ativo" />
                    </div>
                    <div>
                        <label htmlFor="calculaInden">Transportadora</label>
                        <input type="checkbox" id="calculaInden" name="calculaInden" value="ativo" />
                    </div>
                    <div>
                        <label htmlFor="ativo">Atelier</label>
                        <input type="checkbox" id="ativo" name="ativo" value="ativo" />
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Endereço <span>*</span> </label>
                            <input type="text" id="company" name="company" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Bairro<span>*</span></label>
                            <input type="text" id="useName" name="useName" />
                        </div>
                        <div className={styles.flex1}>
                            <label htmlFor="useName">Nº<span>*</span></label>
                            <input type="number" id="useName" name="useName" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Complemento <span>*</span> </label>
                            <input type="text" id="company" name="company" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Cidade<span>*</span></label>
                            <input type="text" id="useName" name="useName" />
                        </div>
                        <div className={styles.flex2}>
                            <label htmlFor="useName">CEP<span>*</span></label>
                            <InputMask
                                mask="99999-999"
                                id="cep"
                                name="cep"
                                placeholder="00000-000"
                                maskChar=""
                            >
                                {(inputProps) => <input {...inputProps} className="input-field" />}
                            </InputMask>
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Estado <span>*</span> </label>
                            <input type="text" id="company" name="company" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">País<span>*</span></label>
                            <input type="text" id="useName" name="useName" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Telefone <span>*</span> </label>
                            <InputMask
                                mask="999(99)9999-9999"
                                id="telefone"
                                name="telefone"
                                placeholder="DDD/(00)0000-0000"
                                maskChar=""
                            >
                                {(inputProps) => <input {...inputProps} className="input-field" />}
                            </InputMask>
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Fax<span>*</span></label>
                            <InputMask
                                mask="999(99)9999-9999"
                                id="fax"
                                name="fax"
                                placeholder="DDD/(00)0000-0000"
                                maskChar=""
                            >
                                {(inputProps) => <input {...inputProps} className="input-field" />}
                            </InputMask>
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Email <span>*</span> </label>
                            <input type="text" id="company" name="company" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Email NFE<span>*</span></label>
                            <input type="text" id="useName" name="useName" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">CNPJ <span>*</span> </label>
                            <InputMask
                                mask="99.999.999/9999-99"
                                id="cnpj"
                                name="cnpj"
                                placeholder="00.000.000/0000-00"
                                maskChar=""
                            >
                                {(inputProps) => <input {...inputProps} className="input-field" />}
                            </InputMask>
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Inscrição<span>*</span></label>
                            <input type="number" id="useName" name="useName" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Representante<span>*</span></label>
                            <input type="text" id="useName" name="useName" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Preposto <span>*</span> </label>
                            <input type="number" id="company" name="company" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Empresa Líder<span>*</span></label>
                            <input type="number" id="useName" name="useName" />
                        </div>
                        <div className={`${styles.flex3} ${styles.inputLider}  `}>
                            <label htmlFor="namePir">Líder do Grupo<span>*</span></label>
                            <input type="checkbox" id="useName" name="useName" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Tipo ICM <span>*</span> </label>
                            <select name="" id="">
                                <option value="">ICM 1</option>
                                <option value="">ICM 2</option>
                                <option value="">ICM 3</option>
                            </select>
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">% ICM<span>*</span></label>
                            <input type="number" id="useName" name="useName" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Conceito<span>*</span></label>
                            <select name="" id="">
                                <option value="">Conceito 1</option>
                                <option value="">Conceito 2</option>
                                <option value="">Conceito 3</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.inputBox}>
                    <div className={styles.flex}>
                        <div className={styles.flex3}>
                            <label htmlFor="company">Rede <span>*</span> </label>
                            <input type="number" id="company" name="company" />
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Situação<span>*</span></label>
                            <select name="" id="">
                                <option value="">Situação 1</option>
                                <option value="">Situação 2</option>
                                <option value="">Situação 3</option>
                            </select>
                        </div>
                        <div className={styles.flex3}>
                            <label htmlFor="namePir">Categoria<span>*</span></label>
                            <input type="number" id="useName" name="useName" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}