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
        <li><a href="/toto">services</a></li>
        <li><a href="/toto">tarifs</a></li>
        <li><a href="/toto">l'équipe</a></li>
        <li className={styles.Header__callToAction}>
          <CallToAction content="rejoindre le club" color={styles.CTA_color} />
        </li>
      </ul>
    </div>
  </header>
)

export default Header
