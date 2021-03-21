import * as React from 'react'
import Cover from '../Cover'
import styles from './index.module.css'

interface Props {
  isOpen: boolean
  key: string
  children: React.ReactNode
  onClick: any
  id: string
}

const ListItem: React.FC<Props> = ({
  isOpen = false,
  key,
  children,
  ...props
}) => {
  return (
    <React.Fragment>
      <Cover isOpen={isOpen} />
      <li className={styles.listItem} {...props}>
        {children}
      </li>
    </React.Fragment>
  )
}

export default ListItem
