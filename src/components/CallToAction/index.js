/* @flow */

import React from 'react'
// import ReactGA from 'react-ga'

import styles from './styles.scss'

const CallToAction = ({ link, content, color }: String) => (
  <a href={link} target="_blank" rel="noreferrer noopener" className={`${styles.CallToAction} ${color}`} >
    { content }
  </a>
)

export default CallToAction
