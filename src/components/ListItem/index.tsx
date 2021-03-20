import * as React from 'react'
import Cover from '../Cover'
import styles from './index.module.css'
interface Props {
  isOpen: boolean
  key: string
  children: React.ReactNode
}

const ListItem: React.FC<Props> = ({
  isOpen = false,
  key,
  children,
  ...props
}) => {
  return (
    <>
      <Cover isOpen={isOpen} />
      <li className={styles.listItem} key={key} {...props}>
        {children}
      </li>
    </>
  )
}

export default ListItem
