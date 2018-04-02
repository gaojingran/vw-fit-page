
import React from 'react'
import withTabBar from '../../components/tab-bar'
import Scroll from '../../components/scroll'
import Slide from '../../components/slide'
import styles from './index.less'

const banner = [
  '//aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
  '//gw.alicdn.com/imgextra/i3/169/TB2OpiCgFmWBuNjSspdXXbugXXa_!!169-0-lubanu.jpg_q50.jpg',
  '//gw.alicdn.com/imgextra/i3/92/TB2G_8HgL5TBuNjSspmXXaDRVXa_!!92-0-lubanu.jpg_q50.jpg',
  '//aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
]

@withTabBar
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.loadImg = false
  }

  imgLoaded = () => {
    if (!this.loadImg && this.scroll) {
      this.loadImg = true
      this.scroll.refresh()
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <Scroll ref={c => this.scroll = c}>
          <Slide>
            {
              banner.map((v, i) => (
                <img key={i} src={v} onLoad={this.imgLoaded} />
              ))
            }
          </Slide>
          <div className={styles.item}>1</div>
          <div className={styles.item}>1</div>
          <div className={styles.item}>1</div>
          <div className={styles.item}>1</div>
          <div className={styles.item}>1</div>
          <div className={styles.item}>1</div>
        </Scroll>
      </div>
    )
  }
}
