import React from 'react'

import '../../assets/fonts/icomoon/style.css'
import styles from './Search.module.scss'

function Search() {
    console.log(styles)
  return (
    <div className={`${styles.search} icon icon-loupe`}>
        <input className={styles.input} type="text" name="search" placeholder="Введите название города"/>
    </div>
  )
}

export default Search