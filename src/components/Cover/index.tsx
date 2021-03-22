import * as React from 'react'
import styles from './index.module.css'
import MinusIcon from '../../assets/icons/minus.png'
import PlusIcon from '../../assets/icons/plus.png'
import Button from '../Button'
import Image from '../Image'
import CoverImg from '../../assets/icons/cover-img.png'
import Text from '../Text'
import {useSpring, animated} from 'react-spring'

interface Props {
  isOpen: boolean
}

const Cover: React.FC<Props> = ({isOpen = false, ...props}) => {
  const animateProps = useSpring({
    delay: 90,
    from: {opacity: 0},
    to: {opacity: 1},
  })

  return isOpen ? (
    <animated.div className={styles.cover} style={animateProps} {...props}>
      <Button>
        <Image
          src={MinusIcon}
          alt="Minus Icon which goes back to previous station"
        />
      </Button>
      <div className={styles.coverImgWrapper}>
        <Image
          className={styles.coverImg}
          src={CoverImg}
          alt="Radio Station's cover image"
        />
      </div>

      <Button>
        <Image src={PlusIcon} alt="Plus Icon which goes back to next station" />
      </Button>
    </animated.div>
  ) : (
    // fix this
    <Text>Something Went Wrong</Text>
  )
}

export default Cover
