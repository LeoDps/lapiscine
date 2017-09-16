/* @flow */

import React from 'react'
import CallToAction from '../CallToAction'
import SingleDescription from '../SingleDescription'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Description = ({ data }: Props) => (
  <section className={styles.Description}>
    <div className={styles.Description__wrapper}>
      <div className={styles.Description__container}>
        <div className={styles.Description__container__main}>
          <h2>{ data.mainTitle }</h2>
          <h3>{ data.mainSubtitle }</h3>
          <p> { data.mainContent }</p>
          <CallToAction content="Obtenir plus d'informations" color={styles.CTA_color} />
          <div className={styles.Description__container__subContainer}>
            <SingleDescription data={data.FirstSingleDescription} />
            <SingleDescription data={data.SecondSingleDescription} />
            <SingleDescription data={data.ThirdSingleDescription} />
            <SingleDescription data={data.FourthSingleDescription} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

Description.defaultProps = {
  data: {
    mainTitle: '',
    mainSubtitle: '',
    mainContent: '',
  },
}

export default Description
