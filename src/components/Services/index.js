/* @flow */

import React from 'react'
import CallToAction from '../CallToAction'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Services = ({ data }: Props) => (
  <section className={styles.Services}>
    <div className={styles.Services__container}>
      <h2>{ data.title }</h2>
      <h3>{ data.subtitle }</h3>
      <div className={styles.Services__services}>
        <div className={styles.Services__service}>
          <h4>{ data.services[0].title }</h4>
          <p>{ data.services[0].content }</p>
        </div>
        <div className={styles.Services__service}>
          <h4>{ data.services[1].title }</h4>
          <p>{ data.services[1].content }</p>
        </div>
        <div className={styles.Services__service}>
          <h4>{ data.services[2].title }</h4>
          <p>{ data.services[2].content }</p>
        </div>
      </div>
      <CallToAction content="DÉCOUVRIR TOUS NOS SERVICES" color={styles.CTA_color} />
    </div>
    <div className={styles.Services__livefeed} />
  </section>
)

Services.defaultProps = {
  data: {
    title: '',
    subtitle: '',
    services: [],
  },
}

export default Services
