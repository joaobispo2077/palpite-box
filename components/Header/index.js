import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'




const Header = () => {
    return (
<>
    <div className="Navbar">
        <ul class="flex justify-between text-2xl">
            <li class="mr-3">
            <Link href='/sobre'>
                <a class="inline-block border border-white rounded hover:border-gray-200 text-yellow-600 hover:bg-gray-200 py-2 px-4">Sobre</a>
            </Link>
            </li>
            <li class="mr-3">
            <Link href='/contato'>
                <a class="inline-block border border-white rounded hover:border-gray-200 text-yellow-600 hover:bg-gray-200 py-2 px-4">Contato</a>
            </Link>
            </li>
            <li class="mr-3">
            <Link href='/pesquisa'>
                <a class="inline-block border border-white rounded hover:border-gray-200 text-yellow-600 hover:bg-gray-200 py-2 px-4">Pesquisa</a>
            </Link>
            </li>
        </ul>
    </div>

 

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
                            <p className={styles.p}>Em troca de feedback você receberá um cupom ou uma vantagem.</p>
                        </div>

                         {/* <button className={styles.a}>
                                <span className={styles.span}>
                                    <img src="/FiLogin.png" className={styles.FiIcon} alt=""/>
                                </span>
                                    <strong className={styles.strong}><a className={styles.a}>Dar sugestão</a></strong>
                        </button>  */}
                    </div>     
        </div>
     
        <div className="Footer flex justify-end">  
              <img src="/code.png"  id="modal_toggle" type="checkbox" className={styles.code} alt="code"/>             
         </div>


         <div className={styles.modal_container}>
            <div className={styles.modal_backdrop}>
                <div className={styles.modal_content}>
                    <label className={styles.modal_close} for="modal_toggle">x</label>
                    <h2>modal_title</h2>
                    <hr />
                    <p>modal_Content</p>
                    <label className={styles.modal_close} button for="modal_toggle">Close</label>
                </div>
            </div>
        </div>

</>
    )
}

export default Header;