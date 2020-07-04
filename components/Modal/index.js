import React from 'react'

import styles from './styles.module.css'

const Modal = ({ id="modal", onClose = {}, children}) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }
    return(
        <>
            <div id={id} className={styles.modal} onClick={handleOutsideClick}>
                <div className={styles.container}>
                    <a className={styles.close} onClick={onClose}/>
                        <div className="content">{children}</div>
                </div>
            </div>
        </>
    )
}
export default Modal;