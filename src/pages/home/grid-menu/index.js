
import React from 'react'
import SVGInline from 'react-svg-inline'
import etc from '../../../assets/svg/etc.svg'
import jtfk from '../../../assets/svg/jtfk.svg'
import lc from '../../../assets/svg/lc.svg'
import rqf from '../../../assets/svg/rqf.svg'
import sdm from '../../../assets/svg/sdm.svg'
import sjcz from '../../../assets/svg/sjcz.svg'
import wdzh from '../../../assets/svg/wdzh.svg'
import xyk from '../../../assets/svg/xyk.svg'
import yxdk from '../../../assets/svg/yxdk.svg'
import zjgj from '../../../assets/svg/zjgj.svg'
import styles from './index.less'

export default class GridMenu extends React.Component {
  render() {
    return (
      <div className={styles['grid-wrapper']}>
        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={lc} />
          <h1 className={styles.title}>理财</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={jtfk} />
          <h1 className={styles.title}>交通罚款</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={sdm} />
          <h1 className={styles.title}>水电煤</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={rqf} />
          <h1 className={styles.title}>燃气费</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={sjcz} />
          <h1 className={styles.title}>手机充值</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={wdzh} />
          <h1 className={styles.title}>我的账户</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={xyk} />
          <h1 className={styles.title}>信用卡</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={yxdk} />
          <h1 className={styles.title}>游戏点卡</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={zjgj} />
          <h1 className={styles.title}>资金归集</h1>
        </div>

        <div className={styles.item}>
          <SVGInline className={styles.icon} width="inherit" svg={etc} />
          <h1 className={styles.title}>ETC缴费</h1>
        </div>
      </div>
    )
  }
}
