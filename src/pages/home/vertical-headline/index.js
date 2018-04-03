

import React from 'react'
import VerticalSlide from '../../../components/vertical-slide'
import styles from './index.less'

const imgUrl = '//gw.alicdn.com/tfs/TB1zn5alxrI8KJjy0FpXXb5hVXa-750-100.png_q75.jpg'
const picUrl = '//gw.alicdn.com/imgextra/i2/2732126765/TB2yxT9XMnD8KJjy1XdXXaZsVXa_!!0-travel.jpg_150x150q75.jpg'

export default class VerticalHeadline extends React.Component {
  render() {
    return (
      <div className={styles.headline}>
        <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})` }}></div>
        <div className={styles.slide}>
          <VerticalSlide>
            {
              Array.from({ length: 5 }, (v, i) => i + 1).map(index => (
                <div className={styles.item} key={index}>
                  <div className={styles.content}>
                    <div className={styles.desc}>
                      <span className={styles.label}>热门</span>
                      <span className={styles.desc}>一个锅盔做了几十年，吃过的人可以从成都排到南充。</span>
                    </div>
                    <div className={styles.desc}>
                      <span className={styles.label}>热门</span>
                      <span className={styles.desc}>一个锅盔做了几十年，吃过的人可以从成都排到南充。</span>
                    </div>
                  </div>
                  <div className={styles.img}>
                    <div className={styles.pic} style={{ backgroundImage: `url(${picUrl})` }}></div>
                    <div className={styles.mask}></div>
                  </div>
                </div>
              ))
            }
          </VerticalSlide>
        </div>
      </div>
    )
  }
}
