/* @flow */

import React from 'react'

import styles from './styles.scss'

const CallToAction = ({ content, color }: String) => (
  <a href="https://twitter.com/ToineLIN" className={`${styles.CallToAction} ${color}`} >
    { content }
  </a>
)

export default CallToAction
