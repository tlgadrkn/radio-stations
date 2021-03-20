import * as React from 'react'
import styles from './index.module.css'

interface Props {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({src, alt, ...props}) => {
  return <img src={src} alt={alt} {...props}></img>
}

export default Image
