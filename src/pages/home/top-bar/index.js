
import React from 'react'
import cls from 'classnames'
import SVGInline from 'react-svg-inline'
import logo from '../../../assets/svg/logo.svg'
import qrcode from '../../../assets/svg/qrcode.svg'
import scan from '../../../assets/svg/scan.svg'
import search from '../../../assets/svg/search.svg'
import camera from '../../../assets/svg/camera.svg'
import styles from './index.less'

export default class TopBar extends React.Component {
  render() {
    const { shrink } = this.props
    const rootClassName = cls(styles.container, shrink ? styles.shrink : '')

    return (
      <div className={rootClassName}>
        <div className={cls(styles['icon-wrapper'], styles.left)}>
          <SVGInline className={styles.icon} width="inherit" fill="inherit" svg={scan} />
          <h1 className={styles.text}>扫一扫</h1>
        </div>
        <h1 className={styles.logo}>Taobao.com</h1>
        <div className={cls(styles['icon-wrapper'], styles.right)}>
          <SVGInline className={styles.icon} width="inherit" fill="inherit" svg={qrcode} />
          <h1 className={styles.text}>会员码</h1>
        </div>

        <div className={styles.search}>
          <div className={styles['input-wrapper']}>
            <SVGInline className={cls(styles.icon, styles.left)} width="inherit" fill="inherit" svg={search} />
            <input className={styles.input} placeholder="搜索商品, 品牌" />
            <SVGInline className={cls(styles.icon, styles.right)} width="inherit" fill="inherit" svg={camera} />
          </div>
        </div>
      </div>
    )
  }
}
