/* @flow */

import React from 'react'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const SingleDescription = ({ data }: Props) => (
  <div className={styles.SingleDescription}>
    <div className={styles.SingleDescription__icon} />
    <hr />
    <div className={styles.SingleDescription__container}>
      <h2>{ data.title }</h2>
      <h3>{ data.subtitle }</h3>
      <p> { data.content }</p>
    </div>
  </div>
)

SingleDescription.defaultProps = {
  data: {
    title: '',
    subtitle: '',
    content: '',
  },
}

export default SingleDescription
