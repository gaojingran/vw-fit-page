
import React from 'react'
import styles from './index.less'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className={styles.root}>home page</div>
  }
}
