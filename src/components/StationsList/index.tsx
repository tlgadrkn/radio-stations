import * as React from 'react'
import styles from './index.module.css'
interface Props {}

const StationList = (props: Props) => {
  const stations = [
    {name: 'Putin FM', number: '66,6'},
    {name: 'Dribbble FM', number: '101,2'},
    {name: 'Doge FM', number: '99,4'},
    {name: 'Ballads FM', number: '87,1'},
    {name: 'Maximum FM', number: '142,2'},
  ]
  return (
    <div className={styles.stationList}>
      {stations.map(item => {
        return (
          <div key={item.number}>
            <span>{item.name}</span>
            <span>{item.number}</span>
          </div>
        )
      })}
    </div>
  )
}

export default StationList
