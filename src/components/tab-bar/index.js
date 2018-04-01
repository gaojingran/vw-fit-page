
import React from 'react'
import SVGInline from "react-svg-inline"
import home from '../../assets/svg/home.svg'
import msg from '../../assets/svg/message.svg'
import mine from '../../assets/svg/mine.svg'
import cart from '../../assets/svg/cart.svg'
import taobao from '../../assets/svg/taobao.svg'
import styles from './index.less'

const withTabBar = Component => {
  return class TabBar extends React.Component {
    render() {
      return (
        <div className={styles.root}>
          <Component {...this.props} />
          <div className={styles['tab-wrapper']}>
            <div className={styles['taobao']}>
              <SVGInline className={styles.icon} width="inherit" fill="inherit" svg={taobao} />
            </div>
            <div className={styles.item}>
              <SVGInline className={styles.icon} width="inherit" fill="inherit" svg={home} />
              <h1 className={styles.text}>微淘</h1>
            </div>
            <div className={styles.item}>
              <SVGInline className={styles.icon} width="inherit" fill="inherit" svg={msg} />
              <h1 className={styles.text}>消息</h1>
            </div>
            <div className={styles.item}>
              <SVGInline className={styles.icon} width="inherit" fill="inherit" svg={cart} />
              <h1 className={styles.text}>购物车</h1>
            </div>
            <div className={styles.item}>
              <SVGInline className={styles.icon} width="inherit" fill="inherit" svg={mine} />
              <h1 className={styles.text}>我的淘宝</h1>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default withTabBar
