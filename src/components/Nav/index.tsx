import * as React from 'react'
import styles from './index.module.css'
import BackArrow from '../../assets/icons/back-arrow.png'
import Switch from '../../assets/icons/switch.png'
import Button from '../Button'
import Image from '../Image'

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Button>
        <Image
          data-testid="backArrowIcon"
          src={BackArrow}
          alt="a white back arrow to go to previous page"
        ></Image>
      </Button>
      <h1 data-testid="navHeading" className={styles.navHeading}>
        STATIONS
      </h1>
      <Button>
        <Image
          data-testid="switchIcon"
          src={Switch}
          alt="a white switch icon to close radio station "
        ></Image>
      </Button>
    </nav>
  )
}

export default Nav
