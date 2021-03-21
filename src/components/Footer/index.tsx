import * as React from 'react'
import styles from './index.module.css'
interface Props {
  currentlyPlaying: string | null
}

const Footer: React.FC<Props> = ({currentlyPlaying}) => {
  return (
    <footer className={styles.footer}>
      {currentlyPlaying ? <h1>{currentlyPlaying}</h1> : <h1>FOOTER</h1>}
    </footer>
  )
}

export default Footer
