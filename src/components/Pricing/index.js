/* @flow */

import React from 'react'
// import CallToAction from '../CallToAction'
import SingleDescription from '../SingleDescription'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Pricing = ({ data }: Props) => (
  <section className={styles.Pricing}>
    <div className={styles.Pricing__background} />
    <div className={styles.Pricing__container}>
      <h2 className={styles.Pricing__container__h2}>{ data.title }</h2>
      <h3 className={styles.Pricing__container__h3}>{ data.subtitle }</h3>
      <div className={styles.Pricing__price}>
        <div className={styles.Pricing__price__container}>
          <h2 className={styles.Pricing__price__h2}>{ data.price } <span>/ mois</span></h2>
          <h5 className={styles.Pricing__price__h5}>
            { data.conditions.content } <span>{ data.conditions.span }</span>
          </h5>
          <div className={styles.Pricing__description}>
            <SingleDescription
              data={data.FirstSingleDescription}
              style={styles.Pricing__SingleDescription}
            />
            <SingleDescription
              data={data.FirstSingleDescription}
              style={styles.Pricing__SingleDescription}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

Pricing.defaultProps = {
  data: {
    title: '',
    subtitle: '',
  },
}

export default Pricing
