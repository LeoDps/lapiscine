/* @flow */

import React from 'react'
import CallToAction from '../CallToAction'

import styles from './styles.scss'

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__container}>
      <div className={styles.Footer__container__description}>
        <h2>la piscine</h2>
        <p>
          Sautez dans le bain des cryptomonnaies et passez à <br />
          la vitesse supérieure en rejoignant La Piscine
        </p>
      </div>
      <div className={styles.Footer__container__networks}>
        <ul>
          <li><a href="https://twitter.com/PiscineFR">Twitter</a></li>
          <li><a href="https://t.me/lapiscine">Telegram</a></li>
          <li className={styles.Footer__callToAction}>
            <CallToAction link="https://goo.gl/forms/fwZhx1l6oLXRwWKA2" content="rejoindre le VIP" color={styles.CTA_color} />
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.Footer__legals}>
      <h4>Des questions ? <a href="mailto:hello@lapiscine.gg"><span>nous contacter</span></a></h4>
      <h5>©2017 LaPiscine | All rigth reserved.</h5>
    </div>
  </footer>
)

export default Footer
