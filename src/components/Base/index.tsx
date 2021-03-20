import * as React from 'react'
import Header from '../Header'
import StationList from '../StationsList'
import Footer from '../Footer'
import styles from './index.module.css'

interface Props {}

const Base = (props: Props) => {
  return (
    <div className={styles.container}>
      <Header />

      <StationList />

      <Footer />
    </div>
  )
}

export default Base
