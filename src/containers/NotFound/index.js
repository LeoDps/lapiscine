/* @flow */

import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import styles from './styles.scss'

export default () => (
  <div className={styles.NotFound}>
    <div className={styles.NotFound__container}>
      <Helmet title="Not found" />
      <h1>Oups, il semblerait que la page que vous recherchez n'existe pas</h1>
      <Link className={styles.NotFound__link} to="/">Retourner sur la page d'accueil</Link>
    </div>
  </div>
)
