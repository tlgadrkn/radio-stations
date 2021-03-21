import * as React from 'react'
import Header from '../Header'
import StationList from '../StationsList'
import Footer from '../Footer'
import styles from './index.module.css'
import {useStationContext} from '../../context/stationsContext'

interface Props {}

const Base: React.FC<Props> = props => {
  const state = useStationContext()
  return (
    <div className={styles.container}>
      <Header />

      {state === null ? <h1>state is null</h1> : <StationList state={state} />}

      <Footer currentlyPlaying={state.currentlyPlaying} />
    </div>
  )
}

export default Base
