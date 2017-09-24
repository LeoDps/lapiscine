/* @flow */

import React from 'react'

import styles from './styles.scss'

const CallToAction = ({ link, content, color }: String) => (
  <a href={link} target="_blank" className={`${styles.CallToAction} ${color}`} >
    { content }
  </a>
)

export default CallToAction
