/* @flow */

import React from 'react'
import CallToAction from '../CallToAction'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Headings = ({ data }: Props) => (
  <section className={styles.Headings}>
    <div className={styles.Headings__background} />
    <div className={styles.Headings__wrapper}>
      <div className={styles.Headings__container}>
        <h1>{ data.title }</h1>
        <p>{ data.content }</p>
        <CallToAction content="rejoindre le club" color={styles.CTA_color} />
      </div>
    </div>
  </section>
)

Headings.defaultProps = {
  data: {
    title: '',
    content: '',
  },
}

export default Headings
