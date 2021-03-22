import * as React from 'react'

interface Props {
  src: string
  alt: string
  className?: string
}

const Image: React.FC<Props> = ({src, alt, ...props}) => {
  return <img src={src} alt={alt} {...props}></img>
}

export default Image
