import * as React from 'react'
import styles from './index.module.css'
import BackArrow from '../../assets/icons/back-arrow.png'
import Switch from '../../assets/icons/switch.png'
import Button from '../Button'
import Image from '../Image'

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <nav className={styles.nav}>
      <Button>
        <Image
          src={BackArrow}
          alt="a white back arrow to go to previous page"
        ></Image>
      </Button>
      <h1>STATIONS</h1>
      <Button>
        <Image
          src={Switch}
          alt="a white switch icon to close radio station "
        ></Image>
      </Button>
    </nav>
  )
}

export default Nav
