/* eslint-disable react/sort-comp */
/* @flow */

import React, { PureComponent } from 'react'
import type { Element } from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import Helmet from 'react-helmet'

import * as action from './action'
import type { Home as HomeType, Dispatch, Reducer } from '../../types'
import styles from './styles.scss'

import Headings from '../../components/Headings'
import Description from '../../components/Description'
import Services from '../../components/Services'
import Pricing from '../../components/Pricing'
import Team from '../../components/Team'

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
  }

  displayHomePage = (data) => {
    return (
      <div className={styles.Home__wrapper}>
        <Headings data={data.headings} />
        <Description data={data.description} />
        <Services data={data.services} />
        <Pricing data={data.pricing} />
        <Team data={data.team} />
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
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
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
