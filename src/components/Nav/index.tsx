import * as React from 'react'
import styles from './index.module.css'
import Button from '../Button'

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <nav className={styles.nav}>
      <Button>My Icon</Button>
      <h1>STATIONS</h1>
      <Button>My Icon</Button>
    </nav>
  )
}

export default Nav
