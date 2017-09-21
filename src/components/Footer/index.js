/* @flow */

import React from 'react'
import CallToAction from '../CallToAction'

import styles from './styles.scss'

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__container}>
      <div className={styles.Footer__container__description}>
        <img src={require('./assets/logo.png')} alt="logo" />
        <p>
          Premier club privé Français autours des cryptomonnaies. <br />
          Calls, article de fond, formation, experts en cryptomonnaies
        </p>
      </div>
      <div className={styles.Footer__container__networks}>
        <ul>
          <li><a href="/toto">Twitter</a></li>
          <li><a href="/toto">Telegram</a></li>
          <li><a href="/toto">YouTube</a></li>
          <li className={styles.Footer__callToAction}>
            <CallToAction link="https://goo.gl/forms/fwZhx1l6oLXRwWKA2" content="rejoindre le club" color={styles.CTA_color} />
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.Footer__legals}>
      <h4>Lire nos <span>termes et conditions légales</span></h4>
      <h5>©2017 LaPiscine | All rigths reserved.</h5>
    </div>
  </footer>
)

export default Footer
