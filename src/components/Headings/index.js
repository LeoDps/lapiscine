/* @flow */

import React from 'react'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Headings = ({ data }: Props) => (
  <section className={styles.Headings}>
    <img className={styles.Headings__background} src={require('./assets/background.svg')} alt="background" />
    <div className={styles.Headings__wrapper}>
      <h1>{ data.title }</h1>
    </div>
  </section>
)

Headings.defaultProps = {
  data: {
    title: '',
  },
}

export default Headings
