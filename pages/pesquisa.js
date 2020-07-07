import React from "React";
import Link from 'next/link';
import { ChevronsUp } from 'react-feather'
import styles from '../css/pesquisa.module.css'

const Pesquisa = () => {

    const save = async () => {
        const form = {
            Nome: 'Pessoa teste',
            Email: 'teste@email.com',
            Whatsapp: '11 111111111',
            Sugestao: 'top',
            Nota: '5',
            Recomendar: 'nao'
        }

        try{

            const response = await fetch('./api/save', {
                 method: 'POST',
                 body: JSON.stringify(form)
             })
     
             const data = await response.json();
             console.log(data);
        } catch (err) {
            console.log(err);
            
        }
        
    }

    return (
    <>
    <div className={styles.mother}>

    <div className="p-2 w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4">
        <div className={styles.form}>
                <div className={styles.textImageContainer}>
                    <p className={styles.p}>Em troca de <span className={styles.pRecolor}>feedback</span> você receberá um <span className={styles.pRecolor}>cupom</span> ou uma vantagem.</p>                           
                    <img src="/logo_palpitebox.png" className={styles.logo} alt=""/>
                </div>
                <p className={styles.p2Center}>Ganhe até 10% de desconto na sua próxima compra.</p>
                <div className={styles.hoverP}>
                    <div className="flex justify-around items-center mt-0 bg-gray-900 rounded-md p-4 hover:cursor-pointer">
                        {/* <p className="text-white font bold">Idealizado e <br/>orientado por:</p> */}
                        <img src="/logo_semana_fsm.png"  className={styles.thanks_logo} alt=""/>
                        <img src="/logo_devpleno.png" className={styles.thanks_logo}  alt=""/>
                    </div>
                </div>
                </div>
        </div>


        <div className="p-2 w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4">

            <div className={styles.form}>
                
                <h1 className={styles.h1}>Críticas e Sugestões</h1>
                <p className={styles.p2}>O estebelecimento que sempre busca por atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
                <div className={styles.internalForm}>
                    <fieldset className="p-2">
                        <h2 className={styles.titleField}>Dados</h2>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>Nome:</label>
                            <input placeholder="Digite o seu nome aqui..."  type="text" className="p-2 block border-solid border-2 border-gray-400 shadow bg-gray-200 hover:bg-white w-40 h-10 sm:w-56 md:w-56 lg:w-48 xl:w-64  my-2"/>
                        </div>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>E-mail:</label>
                            <input placeholder="Digite o seu E-mail aqui..."  type="email" className="p-2 block border-solid border-2 border-gray-400 shadow bg-gray-200 hover:bg-white w-40 h-10 sm:w-56 md:w-56 lg:w-48 xl:w-64  my-2"/>
                        </div>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>Whatsapp:</label>
                            <input placeholder="Digite o seu Whatsapp aqui..."  type="text" className="p-2 block border-solid border-2 border-gray-400 shadow bg-gray-200 hover:bg-white w-40 h-10 sm:w-56 md:w-56 lg:w-48 xl:w-64  my-2"/>
                        </div>
                    </fieldset>
                    <fieldset className="p-2">
                        <h2 className={styles.titleField}>Feedback</h2>
                        <div className="field">
                            <label htmlFor="" className={styles.label}>Sugestão ou opinião:</label>
                            <input rows="2" cols="20"  placeholder="Digite a sugestão/opinião aqui..."  type="text" className="p-4 block border-solid border-2 border-gray-400 shadow bg-gray-200 hover:bg-white w-40 h-10 sm:w-56 md:w-56 lg:w-48 xl:w-56 my-2"/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="" className={styles.label}>Nota para o estabelecimento:</label>
                            <div className="">
                                <span className="rating my-2">
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-5" name="rating-input-1"/>
                                    <label for="rating-input-1-5" className="rating-star mx-2"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-4" name="rating-input-1"/>
                                    <label for="rating-input-1-4" className="rating-star mx-2"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-3" name="rating-input-1"/>
                                    <label for="rating-input-1-3" className="rating-star mx-2"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-2" name="rating-input-1"/>
                                    <label for="rating-input-1-2" className="rating-star mx-2"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-1" name="rating-input-1"/>
                                    <label for="rating-input-1-1" className="rating-star mx-2"></label>
                                </span>
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="" className={styles.label}>Indicaria para um amigo?</label>
                            <div className="flex justify-around my-2">
                                <div>
                                    <input type="radio" id="Sim" name="yes" value="Sim"/>
                                    <label className="mx-2" htmlFor="Sim">Sim</label>
                                </div>
                                <div>
                                    <input type="radio" id="Não" name="yes" value="Não"/>
                                    <label className="mx-2" htmlFor="Não">Não</label>
                                </div>
    
                            </div>
                        </div>
                    </fieldset>
                 </div>
                 <div className="flex justify-center">
                        <button onClick={save}>
                            <div  className={styles.a}>
                                    <span className={styles.span}>
                                        <ChevronsUp className={styles.FiIcon}  />
                                    </span>

                                        <strong className={styles.strong}>Enviar feedback</strong>
                                </div>
                        </button>
                 </div>
            </div>
        </div>



        
    </div>
    </>
    )
}

export default Pesquisa;