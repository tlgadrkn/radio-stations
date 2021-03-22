import * as React from 'react'
import styles from './index.module.css'
interface Props {
  currentlyPlaying: string | null
}

const Footer: React.FC<Props> = ({currentlyPlaying}) => {
  return (
    <footer className={styles.footer}>
      {currentlyPlaying && (
        <div>
          <p>Currently Playing</p>
          <span>{currentlyPlaying}</span>
        </div>
      )}
    </footer>
  )
}

export default Footer
