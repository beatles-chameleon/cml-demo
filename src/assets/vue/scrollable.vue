<template>
      <div 
        class="scroll-container" 
        ref="c-scroller"
        :style="wrapperStyle" @touchstart="touchstartHandler">
          <div ref="inner" :style="innerStyle">
            <slot></slot>
          </div>
      </div>
</template>
<script>
import BScroll from 'better-scroll'
import {cpx2px, cmlStyleTransfer} from '../js/utils/utils';
import collectSlotRefs from '../js/mixins/collectSlotRefs/collectSlotRefs'

export default {
  mixins: [collectSlotRefs],
  props: {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    scrollDirection: {
    // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
      type: String,
      default: 'vertical'
    },
    // -1表示占用剩余高度或者宽度
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    toElement: {
      type: String,
      default: ''
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      scroll: null,
      loadmoreReset: true,
      wrapperStyle: '',
      scrollOptions: {
        probeType: 3,
        // 上拉下拉是否回弹
        bounce: this.bounce
      }
    }
  },
  watch: {
    cstyle () {
      if (!this.hasSize) return
      this.initWrapperStyle()
    },
    height (val) {
      if (!val) return
      this.sizeInitAndChange()
    },
    width () {
      if (!val) return
      this.sizeInitAndChange()
    },
    scrollTop (val) {
      if (!this.scroll) return
      this.scroll.scrollTo(0, -val, 1000)
    },
    scrollLeft (val) {
      if (!this.scroll) return
      this.scroll.scrollTo(-val, 0, 1000)
    },
    toElement (val) {
      this.collectSlotRefs(this.$slots.default)
      let el = this._slotRefs[val]
      if (Array.isArray(el) && el.length) {
        el = this._slotRefs[val][0]
      }
      if (el) {
        /**
          scrollToElement(el, time, offsetX, offsetY, easing)
          {DOM | String} el 滚动到的目标元素, 如果是字符串，则内部会尝试调用 querySelector 转换成 DOM 对象。
          {Number} time 滚动动画执行的时长（单位 ms）
          {Number | Boolean} offsetX 相对于目标元素的横轴偏移量，如果设置为 true，则滚到目标元素的中心位置
          {Number | Boolean} offsetY 相对于目标元素的纵轴偏移量，如果设置为 true，则滚到目标元素的中心位置
        **/
        this.scroll.scrollToElement(el, 1000, false, false)
      }
    }
  },
  computed : {
    hasSize () {
      return this.height > 0 || this.width > 0
    },
    innerStyle () {
      return this.scrollDirection === 'vertical'
              ? 'flex-direction:column;'
              : 'flex-direction:row;'
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.scrollDirection === 'vertical' && !this.height) {
        console.error('纵向滚动必须传递高度属性')
        return
      }
      if (this.scrollDirection === 'horizontal' && !this.width) {
        console.error('横向滚动必须传递宽度属性')
        return
      }
      this.sizeInitAndChange()
    }, 200)
  },
  methods: {
    initWraper () {
      this.wrapper = this.$refs["c-scroller"]
    },
    sizeInitAndChange () {
      this.initWraper()
      this.initWrapperStyle()
      if (!this.scroll) {
        this.calculateInnerWidth()
        // 等待WrapperStyle渲染完成，否则maxScrollY计算有问题
        setTimeout(() => {
          this.initScroller()
        }, 0)
      }
    },
    // 用于input blur
    touchstartHandler (e) {
      let target = e.target.tagName;
      let activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') && activeElement.tagName !== target) {
        activeElement.blur();
      }
    },
    onScrollHandler() {
      let scroll = this.scroll
      let detail = {
        deltaX: scroll.x - scroll.startX,
        deltaY: scroll.y - scroll.startY,
        scrollHeight: scroll.scrollerHeight,
        scrollLeft: Math.abs(scroll.x),
        scrollTop: Math.abs(scroll.y),
        scrollWidth: scroll.scrollerWidth
      }
      this.$emit('onscroll', detail)
      this.$emit('customscroll', detail)
    },
    onBottomHandler(detail) {
      this.$emit('scrolltobottom', {
        direction: 'bottom'
      })
    },
    resetLoadmore () {
      this.loadmoreReset = true
    },
    finishPull () {
      this.$nextTick(() => {
        this.scroll.finishPullUp()
        this.scroll.finishPullDown()
        let timer = setTimeout(() => {
          this.scroll && this.scroll.refresh()
          this._refresh.isRebounding = false
          this._loading.isRebounding = false
          clearTimeout(timer)
        }, 1000)
      })
    },
    initWrapperStyle() {
      if (!this.wrapper) return
      const wrapper = this.wrapper
      let style = ''
      if (this.scrollDirection === 'vertical') {
        style = this.height < 0 ? `height:${window.innerHeight - wrapper.getBoundingClientRect().top}px;`: `height:${this.height}px;`;
      } else {
        style = this.width < 0 ? `width:${window.innerWidth - wrapper.getBoundingClientRect().left}px;`: `width:${this.width}px;`;
      }
      let wrapperStyle = this.hasSize ? this.cstyle + style : style + this.cstyle;
      this.wrapperStyle = cmlStyleTransfer(wrapperStyle);
    },
    calculateInnerWidth  () {
      if (this.scrollDirection !== 'horizontal') return
      // 仅横向滚动需要
      const inner = this.$refs.inner
      let width = 0
      if (inner.children && inner.children.length) {
        let lastChild = inner.children[inner.children.length - 1]
        let marginRight = document.defaultView.getComputedStyle(lastChild,null)['marginRight']
        //  去掉px 转为数字
        marginRight = +marginRight.substring(0, marginRight.length - 2)
        width += lastChild.offsetLeft + lastChild.offsetWidth + marginRight
      }
      // 设置子元素宽度
      inner.style.width = width + 'px'
    },
    initOptions () {
      if (this.scrollDirection !== 'vertical') {
        this.scrollOptions.scrollX = true
        this.scrollOptions.eventPassthrough = 'vertical'
      }

      // 仅垂直方向可设置refresh loading
      if (this._refresh && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullDownRefresh = {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        }
      }

      if (this._loading && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullUpLoad = {
          threshold: 50
        }
      }

    },
    initScroller () {
      const wrapper =  this.wrapper
      const inner = this.$refs.inner

      this.initOptions()
      this.scroll = new BScroll(wrapper, this.scrollOptions)

      // 监听事件
      // 上拉
      if (this.scrollOptions.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          if (this._loading) {
            this._loading.pullingUp()
          }
        })
      }

      // 下拉
      if (this.scrollOptions.pullDownRefresh) {
        this.scroll.on('pullingDown', () => {
          // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
          this._refresh.pullingDown()
        })
      }


      this.scroll.on('scroll', (pos) => {
        this.onScrollHandler(pos)
        this._refresh && this._refresh.toggleBeforeRefreshing(pos.y)
      })

      this.scroll.on('scrollEnd', () => {
        // offset > 0 说明方向向bottom
        let offset, isReachedBottom;
        if (this.scrollDirection === 'vertical') {
          offset = this.scroll.startY - this.scroll.y;
          isReachedBottom = this.scroll.y <= (this.scroll.maxScrollY + cpx2px(this.bottomOffset));
        } else {
          offset = this.scroll.startX - this.scroll.x;
          isReachedBottom = this.scroll.x <= (this.scroll.maxScrollX + cpx2px(this.bottomOffset));
        }
        // 滚动到底部
        if (offset > 0 && this.loadmoreReset && isReachedBottom) {
          this.onBottomHandler()
        } else if (!isReachedBottom && !this.loadmoreReset) {
          this.resetLoadmore()
        }
      })

      this.scroll.on('beforeScrollStart', () => {
        this.scroll.refresh()
        this.calculateInnerWidth()
      })
    }
  }
}
</script>
<style scoped>
  .scroll-container{
    overflow: hidden;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-column {
    flex-direction: column;
  }
</style>

