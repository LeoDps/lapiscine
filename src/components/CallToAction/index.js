/* @flow */

import React from 'react'

import styles from './styles.scss'

const CallToAction = ({ link, content, color }: String) => (
  <a href={link} className={`${styles.CallToAction} ${color}`} >
    { content }
  </a>
)

export default CallToAction
