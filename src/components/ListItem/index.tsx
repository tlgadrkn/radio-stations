import * as React from 'react'
import styles from './index.module.css'
interface Props {
  key: string
  children: React.ReactNode
}

const ListItem: React.FC<Props> = ({key, children, ...props}) => {
  return (
    <li className={styles.listItem} key={key} {...props}>
      {children}
    </li>
  )
}

export default ListItem
