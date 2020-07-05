import React from "React";
import Link from 'next/link';
import { ChevronsUp } from 'react-feather'
import styles from '../css/pesquisa.module.css'

const Pesquisa = () => {
    return (
    <>
    <div className="flex justify-center">


        <div className="w-2/4 p-2">
            <div className={styles.form}>

                
                    <h1 className={styles.h1}>Críticas e Sugestões</h1>
                    <p className={styles.p2}>O estebelecimento que sempre busca por atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
                <div className={styles.internalForm}>
                    <fieldset className="p-2">
                        <h2 className={styles.titleField}>Dados</h2>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>Nome:</label>
                            <input type="text" className="p-2 block shadow bg-blue-100 w-64 h-10 my-2"/>
                        </div>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>E-mail:</label>
                            <input type="email" className="p-2 block shadow bg-blue-100 w-64 h-10 my-2"/>
                        </div>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>Whatsapp:</label>
                            <input type="text" className="p-2 block shadow bg-blue-100 w-64 h-10 my-2"/>
                        </div>
                    </fieldset>
                    <fieldset className="p-2">
                    <h2 className={styles.titleField}>Feedback</h2>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>Sugestão ou opinião:</label>
                            <textarea rows="2" cols="20"  type="text" className="p-4 block shadow bg-blue-100 w-64 h-16 max-h-ful my-2"/>
                        </div>
                        <div>
                            <label htmlFor="" className={styles.label}>Nota do estabelecimento:</label>
                            <div className="block text-center">
                                <input type="checkbox" name="" id=""/>
                                <input type="checkbox" name="" id=""/>
                                <input type="checkbox" name="" id=""/>
                                <input type="checkbox" name="" id=""/>
                                <input type="checkbox" name="" id=""/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className={styles.label}>Indicaria para um amigo?</label>
                            <div className="block text-center">
                            <input type="checkbox" name="" id=""/>
                            <input type="checkbox" name="" id=""/>
                            </div>
                        </div>
                        <button>
                            <div  className={styles.a}>
                                    <span className={styles.span}>
                                        <ChevronsUp className={styles.FiIcon}  />
                                    </span>

                                        <strong className={styles.strong}>Enviar feedback</strong>
                                </div>
                        </button>
                    </fieldset>
                 </div>
            </div>
        </div>


        <div className="w-2/4 mt-8">
            <div className="flex justify-center">
            <img src="/logo_palpitebox.png" className={styles.logo} alt=""/>
            </div>
            <p className={styles.p}>Em troca de feedback você receberá um cupom ou uma vantagem.</p>                           
            <p className={styles.p2}>Ganhe até 10% de desconto na sua próxima compra.</p>
        </div>
        
    </div>
    </>
    )
}

export default Pesquisa;