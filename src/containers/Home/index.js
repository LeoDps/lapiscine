/* eslint-disable react/sort-comp */
/* @flow */

import React, { PureComponent } from 'react'
import type { Element } from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import Helmet from 'react-helmet'
import Scroll, { Element as Target } from 'react-scroll'
import ScrollToTop from 'react-scroll-up'
import Header from '../../components/Header'

import * as action from './action'
import type { Home as HomeType, Dispatch, Reducer } from '../../types'
import styles from './styles.scss'

import Headings from '../../components/Headings'
import Description from '../../components/Description'
import Services from '../../components/Services'
import Pricing from '../../components/Pricing'
import Team from '../../components/Team'

const scrollSpy = Scroll.scrollSpy

type Props = {
  home: HomeType,
  fetchDataIfNeeded: () => void,
};

// Export this for unit testing more easily
export class Home extends PureComponent {
  props: Props;

  static defaultProps: {
    home: {
      readyStatus: 'DATA_INVALID',
      data: null,
    },
    fetchDataIfNeeded: () => {},
  }

  componentDidMount() {
    this.props.fetchDataIfNeeded()
    scrollSpy.update()
  }

  displayHomePage = (data) => {
    return (
      <div className={styles.Home__wrapper}>
        <Headings data={data.headings} />
        <Target name="description">
          <Description data={data.description} />
        </Target>
        <Target name="services" className={styles.Services}>
          <Services data={data.services} />
        </Target>
        <Target name="pricing">
          <Pricing data={data.pricing} />
        </Target>
        <Target name="team">
          <Team data={data.team} />
        </Target>
      </div>
    )
  }

  renderComponents = (): Element<any> => {
    const { home } = this.props

    if (!home.readyStatus || home.readyStatus === action.DATA_INVALID ||
      home.readyStatus === action.DATA_REQUESTING) {
      return <p>Loading...</p>
    }

    if (home.readyStatus === action.DATA_FAILURE) {
      return <p>Oops, Failed to load list!</p>
    }
    return this.displayHomePage(home.data)
  }

  render() {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth

    const desktop = {
      position: 'fixed',
      bottom: 50,
      right: 50,
      zIndex: 1000,
      cursor: 'pointer',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s',
    }
    const mobile = {
      position: 'fixed',
      bottom: 20,
      right: 20,
      zIndex: 1000,
      cursor: 'pointer',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s',
    }
    let style
    if (width > 1045) {
      style = desktop
    } else {
      style = mobile
    }
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <Header />
        <ScrollToTop
          showUnder={500}
          duration={500}
          style={style}
        >
          <div className={styles.ToTop}>
            <svg width="12px" height="6px" viewBox="0 0 12 6">
              <defs />
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="1">
                <g transform="translate(-1534.000000, -4219.000000)" fillRule="nonzero" fill="#4A4A4A">
                  <polygon points="1534 4225 1540 4219 1546 4225" />
                </g>
              </g>
            </svg>
          </div>
        </ScrollToTop>
        {this.renderComponents()}
      </div>
    )
  }
}

const connector: Connector<{}, Props> = connect(
  ({ home }: Reducer) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchDataIfNeeded: () => dispatch(action.fetchDataIfNeeded()),
  }),
)

export default connector(Home)
