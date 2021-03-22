import * as React from 'react'
import styles from './index.module.css'
import Nav from '../Nav'

const Header: React.FC = () => {
  return (
    <header className={styles.widgetHeader}>
      <Nav />
    </header>
  )
}

export default Header
