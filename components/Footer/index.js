import React, { useState } from 'react';

import styles from './styles.module.css';

import Modal from '../Modal'

const Footer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className="flex justify-end">
            <a onClick={() => {
                    isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true)
                }}>
                <img src="/code.png" className={styles.code} alt="code"/>
            </a>
            {isModalVisible ? 
            <Modal onClose={() => setIsModalVisible(false)}>
                <div className={styles.container_modal}>
                    <h2 className={styles.p}>Essa aplicação foi desenvolvida durante a semana FullStackMaster por <span href="https://www.linkedin.com/in/joão-bispo-2077/" className={styles.pRecolor}>João Bispo</span></h2>
                    <div className="flex justify-around m-8">
                        <a rel="prerender" href="https://github.com/joaobispo2077"><img src="/github-logo.png" className={styles.logo} alt="logo do github"/></a>
                        <a rel="prerender" href="https://www.linkedin.com/in/joão-bispo-2077/"><img src="/linkedin-logo.png" className={styles.logo} alt="logo do linkedin"/></a>                        
                    </div> 
                    <div className={styles.container_modal}>
                        <h2 className={styles.p}>Obrigado ao Túlio Faria pela ideia de projeto e mentoria.</h2>
                        <div className="flex justify-around">
                            <img src="/logo_semana_fsm.png"  className={styles.thanks_logo} alt=""/>
                            <img src="/logo_devpleno.png" className={styles.thanks_logo}  alt=""/>
                        </div>

                    </div>

                </div>
            </Modal> :   null }
        </div>
    )
}

export default Footer;