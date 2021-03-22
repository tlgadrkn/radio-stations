import * as React from 'react'
import styles from './index.module.css'
import ListItem from '../ListItem'
import Text from '../Text'
import {State as StateType} from '../../context/stationsContext'
import {useStationDispatch} from '../../context/stationsContext'
import {useSpring, animated} from 'react-spring'

interface Props {
  state: StateType
}

const StationList: React.FC<Props> = state => {
  const {stations} = state?.state
  const {stationListWrapper, stationList} = styles
  const animateProps = useSpring({delay: 100, opacity: 1, from: {opacity: 0}})

  const dispatch = useStationDispatch()
  // check this 'any'
  const handleClick = (e: any) => {
    dispatch({type: 'SET_CURRENTLY_PLAYING', payload: e.currentTarget.id})
  }
  return (
    <div className={stationListWrapper}>
      <animated.ul className={stationList} style={animateProps}>
        {stations.map(item => {
          return (
            <React.Fragment key={item.number}>
              <ListItem
                onClick={handleClick}
                isOpen={item.isOpen}
                key={item.number}
                id={item.number}
              >
                <Text>{item.name}</Text>
                <Text bold>{item.number}</Text>
              </ListItem>
            </React.Fragment>
          )
        })}
      </animated.ul>
    </div>
  )
}

export default StationList
