import * as React from 'react'
import styles from './index.module.css'

interface Props {}

const Header = (props: Props) => {
  return (
    <header className={styles.widgetHeader}>
      <h4>ICON</h4>
      <h1>STATIONS</h1>
      <h4>ICON</h4>
    </header>
  )
}

export default Header
