/* @flow */

import React from 'react'

import styles from './styles.scss'

const CallToAction = ({ context }: String) => (
  <a href="https://twitter.com/ToineLIN" className={styles.CallToAction}>
    { context }
  </a>
)

export default CallToAction
