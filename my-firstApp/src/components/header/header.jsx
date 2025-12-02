import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.headM}>
      <h2 className={styles.Mh2}>Sherians School</h2>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export {header}
