import * as React from 'react'
import styles from './index.module.css'
import Nav from '../Nav'
interface Props {}

const Header = (props: Props) => {
  return (
    <header className={styles.widgetHeader}>
      <Nav />
    </header>
  )
}

export default Header
