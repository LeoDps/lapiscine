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
      <CallToAction link="https://goo.gl/forms/fwZhx1l6oLXRwWKA2" content="Je plonge" color={styles.CTA_color} />
    </div>
    <ul className={styles.Services__results}>
      {
        /* eslint-disable */
        data.Results.map((result) => {
          return (
            <li
              key={_.uniqueId()}
              className={styles.Services__result}
            >
              <img src={require(`./assets/${result.coin}`)} alt="cryptocurrency logo" />
              <h5><span>{result.coin_name}</span>{result.coin_slug}</h5>
              <h5><span>{result.datetime}</span>jours</h5>
              <h4>+{result.percent}%</h4>
            </li>
          )
        })
        /* eslint-enable */
      }
    </ul>
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
