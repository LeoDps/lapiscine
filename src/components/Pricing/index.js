/* @flow */

import React from 'react'
import _ from 'lodash'

import CallToAction from '../CallToAction'
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
          <CallToAction link="https://goo.gl/forms/fwZhx1l6oLXRwWKA2" content="rejoindre la piscine" color={styles.CTA_color} />
          <div className={styles.Pricing__description}>
            {
              data.Descriptions.map((content) => {
                return (
                  <SingleDescription
                    key={_.uniqueId()}
                    data={content}
                    style={styles.Pricing__SingleDescription}
                  />
                )
              })
            }
            <div className={styles.Pricing__description__services}>
              {
                data.Services.map((array) => {
                  return (
                    <ul key={_.uniqueId()}>
                      {
                        array.map((service) => {
                          return (
                            <li
                              key={_.uniqueId()}
                            >
                              <svg width="17px" height="17px" viewBox="0 0 17 17">
                                <defs />
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                  <g transform="translate(-1031.000000, -3110.000000)" fillRule="nonzero" fill="#3A9D6B">
                                    <g transform="translate(-52.000000, 0.000000)">
                                      <g transform="translate(0.000000, 2170.000000)">
                                        <g transform="translate(680.000000, 81.000000)">
                                          <g transform="translate(0.000000, 143.000000)">
                                            <g transform="translate(102.000000, 715.000000)">
                                              <g transform="translate(301.000000, 0.000000)">
                                                <path d="M15.0782609,6.46956522 C15.4478261,6.39565217 15.8913043,6.6173913 15.9652174,6.98695652 C16.1869565,7.65217391 16.2608696,8.39130435 16.2608696,9.13043478 C16.2608696,13.6391304 12.6391304,17.2608696 8.13043478,17.2608696 C3.62173913,17.2608696 0,13.6391304 0,9.13043478 C0,4.62173913 3.62173913,1 8.13043478,1 C9.60869565,1 11.0869565,1.44347826 12.4173913,2.1826087 C12.7130435,2.40434783 12.8608696,2.84782609 12.6391304,3.2173913 C12.4173913,3.51304348 11.973913,3.66086957 11.6043478,3.43913043 C10.5695652,2.84782609 9.38695652,2.47826087 8.13043478,2.47826087 C4.43478261,2.47826087 1.47826087,5.43478261 1.47826087,9.13043478 C1.47826087,12.826087 4.43478261,15.7826087 8.13043478,15.7826087 C11.826087,15.7826087 14.7826087,12.826087 14.7826087,9.13043478 C14.7826087,8.53913043 14.7086957,7.94782609 14.5608696,7.35652174 C14.4869565,6.98695652 14.7086957,6.54347826 15.0782609,6.46956522 Z M16.7782609,1.96086957 C17.073913,2.25652174 17.073913,2.7 16.7782609,2.99565217 L8.64782609,11.126087 C8.5,11.273913 8.27826087,11.3478261 8.13043478,11.3478261 C7.9826087,11.3478261 7.76086957,11.273913 7.61304348,11.126087 L4.65652174,8.16956522 C4.36086957,7.87391304 4.36086957,7.43043478 4.65652174,7.13478261 C4.95217391,6.83913043 5.39565217,6.83913043 5.69130435,7.13478261 L8.13043478,9.57391304 L15.7434783,1.96086957 C16.0391304,1.66521739 16.4826087,1.66521739 16.7782609,1.96086957 Z" />
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                              <p>
                                { service.text }
                              </p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Pricing__disclaimer}>
        <div className={styles.Pricing__disclaimer__container}>
          <h2>{ data.disclaimer.title }</h2>
          <h3>{ data.disclaimer.subtitle }</h3>
          <p>{ data.disclaimer.content }</p>
          <CallToAction link="https://goo.gl/forms/fwZhx1l6oLXRwWKA2" content="rejoignez-nous" color={styles.CTA2_color} />
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
