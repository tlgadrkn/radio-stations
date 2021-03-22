import * as React from 'react'
import {State} from '../../context/stationsContext'
import {getCurrentlyPlayingStation} from '../../utils/helperFunctions'
import styles from './index.module.css'
interface Props {
  state: State
}

const Footer: React.FC<Props> = ({state}) => {
  const [station] = getCurrentlyPlayingStation(state.currentlyPlaying, state)
  console.log(station)

  return (
    <footer className={styles.footer}>
      {station && (
        <div>
          <p className={styles.footerTitle}>CURRENTLY PLAYING</p>
          <span>{station.name}</span>
        </div>
      )}
    </footer>
  )
}

export default Footer
