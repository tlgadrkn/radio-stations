import * as React from 'react'
import styles from './index.module.css'

interface Props {}

const Nav = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <h4>ICON</h4>
      <h1>STATIONS</h1>
      <h4>ICON</h4>
    </nav>
  )
}

export default Nav
