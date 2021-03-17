import * as React from 'react'
import Header from '../Header'
import styles from './index.module.css'

interface Props {}

const Base = (props: Props) => {
  return (
    <div className={styles.container}>
      <Header />

      <div>
        <h1>STATIONS</h1>
      </div>

      <div>
        <h1>FOOTER</h1>
      </div>
    </div>
  )
}

export default Base
