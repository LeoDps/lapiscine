/* @flow */

import React from 'react'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Headings = ({ data }: Props) => (
  <div className={styles.Headings}>
    <h1>{ data.title }</h1>
  </div>
)

Headings.defaultProps = {
  data: {
    title: '',
  },
}

export default Headings
