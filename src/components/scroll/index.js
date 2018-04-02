

import React from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import styles from './index.less'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

const scrollProps = {
  className: PropTypes.string,
  dataSource: PropTypes.array,
  probeType: PropTypes.oneOf([1, 2, 3]),
  click: PropTypes.bool,
  listenScroll: PropTypes.bool,
  listenBeforeScroll: PropTypes.bool,
  direction: PropTypes.string,
  scrollbar: PropTypes.bool,
  startY: PropTypes.number,
  freeScroll: PropTypes.bool,
  horizontalWidth: PropTypes.number,
  scroll: PropTypes.func,
  beforeScrollStart: PropTypes.func,
}

const defaultProps = {
  className: '',
  dataSource: [],
  probeType: 1,
  click: true,
  listenScroll: false,
  listenBeforeScroll: false,
  direction: DIRECTION_V,
  scrollbar: false,
  startY: 0,
  freeScroll: false,
  horizontalWidth: 0,
  scroll: () => {},
  beforeScrollStart: () => {},
}

export default class Scroll extends React.Component {
  static defaultProps = defaultProps

  static propTypes = scrollProps

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.init()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource !== this.props.dataSource) {
      this.refresh()
    }
  }

  init = () => {
    if (!this.wrapper) return;
    const { click, startY, probeType, scrollbar,
      freeScroll, direction, listenScroll, horizontalWidth,
      listenBeforeScroll, scroll, beforeScrollStart } = this.props
    // 如果开启freeScroll设置宽度
    if (freeScroll || direction === DIRECTION_H) {
      this.scrollContent.style.width = horizontalWidth + 'px'
    }
    // 创建betterScroll
    this.bs = new BScroll(this.wrapper, {
      click,
      startY,
      probeType,
      scrollbar,
      pullUpLoad: false,
      freeScroll,
      pullDownRefresh: false,
      scrollY: freeScroll || direction === DIRECTION_V,
      scrollX: freeScroll || direction === DIRECTION_H,
    })
    // 开启滚动监听到话调用父组件callback
    if (listenScroll) {
      this.bs.on('scroll', (pos) => {
        scroll(pos);
      })
    }
    // 向父组件派发滚动开始事件
    if (listenBeforeScroll) {
      this.bs.on('beforeScrollStart', (pos) => {
        beforeScrollStart(pos);
      })
    }
  }

  // 禁用
  disable = () => {
    this.bs && this.bs.disable();
  }

  // 启用
  enable = () => {
    this.bs && this.bs.enable();
  }

  // 刷新
  refresh = () => {
    this.bs && this.bs.refresh();
  }

  // 滚动到某位置
  scrollTo = () => {
    this.bs && this.bs.scrollTo.apply(this.bs, arguments);
  }

  // 滚动到某个dom
  scrollToElement = () => {
    this.bs && this.bs.scrollToElement.apply(this.bs, arguments);
  }

  // 销毁 解绑事件
  destroy = () => {
    this.bs && this.bs.destroy();
  }

  render() {
    const { children, className } = this.props
    return (
      <div className={styles['list-wrapper'] + ' ' + className} ref={c => this.wrapper = c}>
        <div className={styles['scroll-content']} ref={c => this.scrollContent = c}>
          {children}
        </div>
      </div>
    )
  }
}
