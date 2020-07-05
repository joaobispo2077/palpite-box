import React from 'react';
import Link from 'next/link';
import { LogIn, ThumbsUp } from 'react-feather'

import styles from '../css/index.module.css'

const Index = () => {
    return (
        <div>       
 

        <div className="content flex mt-4">         
                    <div className="w-2/4">
                        <img src="/suggestions_box.svg" className={styles.caixas_svg} alt="Caixas de Sugestão"/>
                        
                    </div>
                    <div className="flex-wrap content-center w-2/4">
                        <div className="flex content-center">
                            <h1 className={styles.h1} >Dê a sua <span className={styles.h1Recolor}>sugestão</span>  ou opinião e receba um <span className={styles.h1Recolor}>cupom. </span></h1>
                            <img src="/logo_palpitebox.png" className={styles.logo} alt="Logomarca Palpite Box"/>                 
                        </div>
                        <div className="flex content-center">                                
                            <ThumbsUp className={styles.ThumbsUp}/>
                            <p className={styles.p}>Em troca de feedback você receberá um cupom ou uma vantagem.</p>                           
                        </div>
                        <p className={styles.p2}>Ganhe até 10% de desconto na sua próxima compra.</p>
                        
                        <div className="flex justify-center">
                        <Link href="/pesquisa">
                            <div  className={styles.a}>
                                <span className={styles.span}>
                                    <LogIn className={styles.FiIcon}  />
                                </span>

                                    <strong className={styles.strong}>Dar feedback</strong>
                            </div>
                        </Link>

                        </div>
                    </div>     
        </div>

        </div>
    ) 
}

export default Index;