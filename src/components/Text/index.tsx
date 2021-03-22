import * as React from 'react'
import cn from 'classnames'
import styles from './index.module.css'

interface Props {
  bold?: boolean
  className?: string
}

const Text: React.FC<Props> = ({children, className, bold, ...props}) => {
  const {text, textBold} = styles
  return (
    <span className={cn([className, text, bold && textBold])} {...props}>
      {children}
    </span>
  )
}

export default Text
