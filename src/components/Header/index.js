/* @flow */

import React from 'react'
import CallToAction from '../CallToAction'

import styles from './styles.scss'

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Header__wrapper}>
      <h2>la piscine</h2>
      <ul>
        <li><a href="/toto">concept</a></li>
        <li><a href="/toto">formations</a></li>
        <li><a href="/toto">tarifs</a></li>
        <li><a href="/toto">support</a></li>
        <li className={styles.Header__callToAction}>
          <CallToAction context="rejoindre le club" />
        </li>
      </ul>
    </div>
  </header>
)

export default Header
