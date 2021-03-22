import * as React from 'react'
import styles from './index.module.css'
import MinusIcon from '../../assets/icons/minus.png'
import PlusIcon from '../../assets/icons/plus.png'
import Button from '../Button'
import Image from '../Image'
import CoverImg from '../../assets/icons/cover-img.png'

interface Props {
  isOpen: boolean
}

const Cover: React.FC<Props> = ({isOpen = false, ...props}) => {
  return isOpen ? (
    <div className={styles.cover} {...props}>
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
    </div>
  ) : (
    // fix this
    <span></span>
  )
}

export default Cover
