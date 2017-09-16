/* @flow */

import React from 'react'
// import CallToAction from '../CallToAction'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Services = ({ data }: Props) => (
  <section className={styles.Services}>
    <div className={styles.Services__wrapper}>
      <div className={styles.Services__container}>
        <h2>{ data.title }</h2>
      </div>
    </div>
  </section>
)

Services.defaultProps = {
  data: {
    title: '',
  },
}

export default Services
