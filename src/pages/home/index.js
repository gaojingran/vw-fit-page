
import React from 'react'
import ReactDOM from 'react-dom'
import withTabBar from '../../components/tab-bar'
import Scroll from '../../components/scroll'
import Slide from '../../components/slide'
import TopBar from './top-bar'
import GridMenu from './grid-menu'
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
    this.topBarHeight = 0
    this.state = {
      shrink: false
    }
  }

  componentDidMount() {
    if (this.topBar) {
      this.topBarHeight = ReactDOM.findDOMNode(this.topBar).clientHeight;
    }
  }

  imgLoaded = () => {
    if (!this.loadImg && this.scroll) {
      this.loadImg = true
      this.scroll.refresh()
    }
  }

  handleScroll = (pos) => {
    if (this.topBarHeight && pos.y < -this.topBarHeight && !this.state.shrink) {
      this.setState({ shrink: true })
    }
    if ( this.topBarHeight && pos.y > -this.topBarHeight && this.state.shrink) {
      this.setState({ shrink: false })
    }
  }

  render() {
    const { shrink } = this.state

    return (
      <div className={styles.root}>
        <TopBar ref={c => this.topBar = c} shrink={shrink} />
        <Scroll
          className={styles.scroll}
          ref={c => this.scroll = c}
          probeType={3}
          listenScroll={true}
          scroll={this.handleScroll}>
          <Slide>
            {
              banner.map((v, i) => (
                <img key={i} src={v} onLoad={this.imgLoaded} />
              ))
            }
          </Slide>
          <GridMenu />
          <div className={styles.item}>像素<div className={styles.box}/></div>
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
