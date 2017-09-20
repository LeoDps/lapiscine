/* @flow */

import React from 'react'
import { Link } from 'react-scroll'

import CallToAction from '../CallToAction'

import styles from './styles.scss'

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Header__wrapper}>
      <h2>la piscine</h2>
      <ul>
        <li>
          <Link
            activeClass={styles.active}
            to="description"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            concept
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="pricing"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            tarifs
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
          >
            l'équipe
          </Link>
        </li>
        <li className={styles.Header__callToAction}>
          <CallToAction content="rejoindre le club" color={styles.CTA_color} />
        </li>
      </ul>
    </div>
  </header>
)

export default Header
