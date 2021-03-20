import * as React from 'react'
import styles from './index.module.css'
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <h1>FOOTER</h1>
    </footer>
  )
}

export default Footer
