import * as React from 'react'
import Typography from '../Typography'
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
          <Typography variant="body">{currentlyPlaying}</Typography>
        </div>
      )}
    </footer>
  )
}

export default Footer
