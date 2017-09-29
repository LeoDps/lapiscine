/* @flow */

import React from 'react'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const SingleDescription = ({ data, style }: Props) => (
  <div className={`${styles.SingleDescription} ${style}`}>
    <div className={styles.SingleDescription__icon}>
      <img
        src={require(`./assets/${data.icon}`)} //eslint-disable-line
        alt="icon"
      />
    </div>
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
