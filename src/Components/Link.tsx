/* eslint-disable prettier/prettier */
import * as React from 'react'
import styles from '../styles.module.css'

interface ButtonProps {
  text: string
  link: string
  variant?: 'light' | 'dark' | 'animated'
}

export const Link = ({ text, link, variant }: ButtonProps) => {
  const classname: any = {
    light: styles.link,
    dark: styles.linkDark,
    animated: styles.linkAnimated
  }
  return (
    <a
      className={`${variant ? classname[variant] : classname.light}`}
      onClick={() => window.open(link, '_blank')}
    >
      {text}
    </a>
  )
}
