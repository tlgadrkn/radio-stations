import * as React from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import ListItem from '../ListItem'
import {State as StateType} from '../../context/stationsContext'
import {useStationDispatch} from '../../context/stationsContext'

interface Props {
  state: StateType
}

const StationList: React.FC<Props> = state => {
  const {stations} = state?.state
  const {stationListWrapper, stationList, listItem, listItemBold} = styles

  const dispatch = useStationDispatch()
  console.log('stationlist', state)
  // check this 'any'
  const handleClick = (e: any) => {
    dispatch({type: 'SET_CURRENTLY_PLAYING', payload: e.currentTarget.id})
  }
  return (
    <div className={stationListWrapper}>
      <ul className={stationList}>
        {stations.map(item => {
          return (
            <React.Fragment key={item.number}>
              <ListItem
                onClick={handleClick}
                isOpen={item.isOpen}
                key={item.number}
                id={item.number}
              >
                <span className={listItem}>{item.name}</span>
                <span className={cn([listItem, listItemBold])}>
                  {item.number}
                </span>
              </ListItem>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default StationList
