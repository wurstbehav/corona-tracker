import React from 'react'
import styles from './loader.module.css'

const Loadingpage = () => (
    <div className={styles.loader}>
        <img className={styles.loader__image} alt="loader" src="/loader.gif" />
    </div>
)



export default Loadingpage