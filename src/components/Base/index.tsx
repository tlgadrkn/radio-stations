import * as React from 'react'
import Header from '../Header'
import StationList from '../StationsList'
import styles from './index.module.css'

interface Props {}

const Base = (props: Props) => {
  return (
    <div className={styles.container}>
      <Header />

      <StationList />

      <h1>FOOTER</h1>
    </div>
  )
}

export default Base
