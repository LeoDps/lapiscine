/* @flow */

import React from 'react'
import _ from 'lodash'

// import CallToAction from '../CallToAction'

import styles from './styles.scss'

type Props = { data: Array<Object> }

const Team = ({ data }: Props) => (
  <section className={styles.Team}>
    <h2>{ data.title }</h2>
    <h3>{ data.subtitle }</h3>
    <div className={styles.Team__container}>
      {
        data.Team.map((member) => {
          return (
            <div
              className={styles.Team__member}
              key={_.uniqueId()}
            >
              <a target="_blank" href={member.twitter} className={styles.Team__member__image}>
                <img
                  src={require(`./assets/${member.image}`)} // eslint-disable-line import/no-dynamic-require
                  alt={member.name}
                />
              </a>
              <div className={styles.Team__member__infos}>
                <h4>{ member.name }</h4>
                <a href={member.twitter}>
                  { member.twitter_at }
                </a>
                <p>{ member.content }</p>
              </div>
              <div className={styles.Team__member__hover}>
                <h4>{ member.name }</h4>
                <a href={member.twitter}>
                  { member.twitter_at }
                </a>
                <p>{ member.content }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  </section>
)

Team.defaultProps = {
  data: {
    title: '',
    subtitle: '',
  },
}

export default Team
