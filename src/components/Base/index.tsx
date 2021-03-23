import * as React from 'react'
import Header from '../Header'
import StationList from '../StationsList'
import Footer from '../Footer'
import styles from './index.module.css'
import {useStationContext} from '../../context/stationsContext'

const Base: React.FC = () => {
  const state = useStationContext()
  return (
    <div className={styles.container}>
      <Header />

      {!state ? <h1>Loading Stations...</h1> : <StationList state={state} />}

      <Footer state={state} />
    </div>
  )
}

export default Base
