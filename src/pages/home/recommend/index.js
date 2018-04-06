
import React from 'react'
import styles from './index.less'

const imgUrl = "//gw.alicdn.com/bao/uploaded/i4/2670830951/TB2X7pHaf9TBuNjy0FcXXbeiFXa-2670830951.jpg_100x150Q50s50.jpg"

export default class Recommend extends React.Component {
  render() {
    return (
      <div className={styles.recommend}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h1 className={styles.title}>淘抢货</h1>
              <h2 className={styles.sub}>高颜值美物</h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}></h1>
              <h2 className={styles.sub}></h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
          </div>
          <div className="hairline-v" />
          <div className={styles.col}>
            <div className={styles.content}>
              <h1 className={styles.title}>淘抢货</h1>
              <h2 className={styles.sub}>高颜值美物</h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}></h1>
              <h2 className={styles.sub}></h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
          </div>
        </div>
        <div className="hairline-h" />
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h1 className={styles.title}>淘抢货</h1>
              <h2 className={styles.sub}>高颜值美物</h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}></h1>
              <h2 className={styles.sub}></h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
          </div>
          <div className="hairline-v" />
          <div className={styles.col}>
            <div className={styles.content}>
              <h1 className={styles.title}>淘抢货</h1>
              <h2 className={styles.sub}>高颜值美物</h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}></h1>
              <h2 className={styles.sub}></h2>
              <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})`}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
