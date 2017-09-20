/* @flow */

import React from 'react'
import _ from 'lodash'

import CallToAction from '../CallToAction'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Services = ({ data }: Props) => (
  <section className={styles.Services}>
    <div className={styles.Services__container}>
      <h2>{ data.title }</h2>
      <h3>{ data.subtitle }</h3>
      <div className={styles.Services__services}>
        {
          data.Services.map((service) => {
            return (
              <div
                key={_.uniqueId()}
                className={styles.Services__service}
              >
                <h4>{ service.title }</h4>
                <p>{ service.content }</p>
              </div>
            )
          })
        }
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
