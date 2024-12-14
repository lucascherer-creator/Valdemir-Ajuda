import styles from "./CadastroRep.module.css";
import InputMask from "react-input-mask";

export function CadastroRep() {
  return (
    <form action="" className={styles.form}>
      <header>
        <h1>
          Cadastro <span> Representante</span>
        </h1>
      </header>
      <fieldset className={styles.inputBox}>
        <div className={styles.flex}>
          <div className={styles.flex2}>
            <label htmlFor="company">
              Empresa <span>*</span>{" "}
            </label>
            <input type="text" id="company" name="company" />
          </div>
          <div className={styles.flex3}>
            <label htmlFor="useName">
              Nome Uso <span>*</span>
            </label>
            <input type="text" id="useName" name="useName" />
          </div>
          <div className={styles.flex1}>
            <label htmlFor="namePir">
              Nome Pir <span>*</span>
            </label>
            <input type="text" id="namePir" name="namePir" />
          </div>
        </div>
        <div className={styles.flex1}>
          <label htmlFor="useName">
            Comissão % <span>*</span>
          </label>
          <InputMask mask="99,9" id="comsissião" name="comsissião" placeholder="00,0%" maskChar="">
            {(inputProps) => <input {...inputProps} className="input-field" />}
          </InputMask>
        </div>
      </fieldset>
      <fieldset className={styles.inputBox}>
        <div className={styles.flex}>
          <div className={styles.flex1}>
            <label htmlFor="tipoRepr">
              Tipo Representante <span>*</span>
            </label>
            <input type="text" id="tipoRepr" name="tipoRepr" />
          </div>
          <div className={styles.flex1}>
            <label htmlFor="irff">
              IRFF <span>*</span>
            </label>
            <input type="text" id="irff" name="irff" />
          </div>
          <div className={styles.flex1}>
            <label htmlFor="company">
              Estab. Padrão <span>*</span>{" "}
            </label>
            <input type="text" id="company" name="company" />
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.inputBox}>
        <div className={styles.flex}>
          <div className={styles.flex1}>
            <label htmlFor="inicioVendas">
              Início Vendas <span>*</span>
            </label>
            <input type="date" id="inicioVendas" name="inicioVendas" />
          </div>
          <div className={styles.flex1}>
            <label htmlFor="tipoMercado">
              Tipo de Mercado <span>*</span>
            </label>
            <input type="text" id="tipoMercado" name="tipoMercado" />
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.inputBox}>
        <div className={styles.flex}>
          <div className={styles.flex1}>
            <label htmlFor="representandeLider">
              Representante Líder <span>*</span>{" "}
            </label>
            <input type="text" id="representandeLider" name="representandeLider" />
          </div>
          <div className={styles.flex1}>
            <label htmlFor="regiaoVenda">
              Região Venda <span>*</span>
            </label>
            <input type="text" id="regiaoVenda" name="regiaoVenda" />
          </div>
          <div className={styles.flex1}>
            <label htmlFor="regiaoCota">
              Região Cota <span>*</span>
            </label>
            <input type="text" id="regiaoCota" name="regiaoCota" />
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.checkWrapper}>
        <div>
          <label htmlFor="geraCota">Gera Cota</label>
          <input type="checkbox" id="geraCota" name="geraCota" value="ativo" />
        </div>
        <div>
          <label htmlFor="controlaCota">Controla Cota</label>
          <input type="checkbox" id="controlaCota" name="controlaCota" value="ativo" />
        </div>
        <div>
          <label htmlFor="geraEdi">Gera EDI</label>
          <input type="checkbox" id="geraEdi" name="geraEdi" value="ativo" />
        </div>
        <div>
          <label htmlFor="calculaInden">Calcula Indenização</label>
          <input type="checkbox" id="calculaInden" name="calculaInden" value="ativo" />
        </div>
        <div>
          <label htmlFor="ativo">Ativo</label>
          <input type="checkbox" id="ativo" name="ativo" value="ativo" />
        </div>
      </fieldset>
    </form>
  );
}
