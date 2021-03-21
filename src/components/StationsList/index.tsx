import * as React from 'react'
import styles from './index.module.css'
import ListItem from '../ListItem'
import Typography from '../Typography'
import {State as StateType} from '../../context/stationsContext'
import {useStationDispatch} from '../../context/stationsContext'

interface Props {
  state: StateType
}

const StationList: React.FC<Props> = state => {
  const {stations} = state?.state
  const dispatch = useStationDispatch()
  const handleClick = (e: any) => {
    const element = e.target
    console.log(element)

    dispatch({type: 'SET_CURRENTLY_PLAYING', payload: e.target.value})
  }
  return (
    <div className={styles.stationListWrapper}>
      <ul className={styles.stationList}>
        {stations.map(item => {
          return (
            <React.Fragment key={item.number}>
              <ListItem
                onClick={handleClick}
                isOpen={item.isOpen}
                key={item.number}
                id={item.number}
              >
                <Typography variant="body">{item.name}</Typography>
                <Typography variant="body" bold={true}>
                  {item.number}
                </Typography>
              </ListItem>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default StationList
