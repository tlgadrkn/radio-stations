import * as React from 'react'
import styles from './index.module.css'
interface Props {
  variant: string
  bold?: boolean
  className?: string
  children: React.ReactNode
}

const Typography: React.FC<Props> = ({
  variant,
  bold,
  className,
  children,
  ...props
}) => {
  const availableVariants = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'span',
  }

  const isValidVariant = availableVariants.hasOwnProperty(variant)

  if (!isValidVariant) {
    throw new TypeError(
      `Provided variant: ${variant} does not exist on available variants for Typography Component`,
    )
  }

  return (
    <span className={`${styles.span} ${bold && styles.bold}`} {...props}>
      {children}
    </span>
  )
}

export default Typography
