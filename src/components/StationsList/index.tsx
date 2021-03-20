import * as React from 'react'
import styles from './index.module.css'
import ListItem from '../ListItem'
import Typography from '../Typography'

interface Props {}

const StationList: React.FC<Props> = () => {
  const stations = [
    {name: 'Putin FM', number: '66,6'},
    {name: 'Dribbble FM', number: '101,2'},
    {name: 'Doge FM', number: '99,4'},
    {name: 'Ballads FM', number: '87,1'},
    {name: 'Maximum FM', number: '142,2'},
  ]
  return (
    <div className={styles.stationListWrapper}>
      <ul className={styles.stationList}>
        {stations.map(item => {
          return (
            <>
              <ListItem isOpen={false} key={item.number}>
                <Typography variant="body">{item.name}</Typography>
                <Typography variant="body" bold={true}>
                  {item.number}
                </Typography>
              </ListItem>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default StationList
