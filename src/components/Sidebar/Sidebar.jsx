import React from 'react'
import Search from '../Search/Search'

import styles from './Sidebar.module.scss'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Search />
    </aside>
  )
}

export default Sidebar