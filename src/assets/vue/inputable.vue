<template>
        <html:input
            :value="value"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
            v-if="isInput"

            @input="inputEvent"
            @blur="blurEvent"
            @focus="focusEvent"
            @keyup="keyupEvent"

            :pattern="typePattern"
            ref="c-input"
            :style="styleObj"
        />
        <html:textarea 
            v-else
            :value="value"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
            :rows="rows"

            @input="inputEvent"
            @blur="blurEvent"
            @focus="focusEvent"
            @keyup="keyupEvent"

            ref="c-textarea"
            :style="styleObj"
          />
</template>
<script>
import { cmlStyleTransfer, getValBetweenMaxAndMin} from '../js/utils/utils';
export default {
  data () {
      return {
          typePattern: ''
      }
  },
  props: {
    //内容
    value: {
      type: String,
      default: ''
    },
    //placerholder
    placeholder: {
      type: String,
      default: ''
    },
    //是否禁用输入
    disabled: {
      type: Boolean,
      default: false
    },
    //控制是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    //最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    //右下角返回键类型
    returnKeyType: { //枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#bebebe'
    },
    computedStyle: {
      type: String,
      default: ''
    },
    pattern: {
      type: String,
      default: ''
    },
    type: {
        type: String,
        default: 'text'  //枚举值 text number password
    },
    template: {
        type: String,
        default: 'text' 
    },
    rows: {
        type: Number,
        default: 2 
    },
    //type=number 最大值
    maxValue: {
      type: Number,
      default: Infinity
    },
    //type=number 最小值
    minValue: {
      type: Number,
      default: -Infinity
    }
  },
  watch: {
    focus: function(newVal, oldVal) {
      this.changeFocus(newVal);
    },
    value: function (val) {
      this.$refs['c-input'].value = val
    }
  },
  computed: {
    isInput () {
      return this.template == 'input';
    },
    styleObj () {
      return cmlStyleTransfer(this.computedStyle) || {};
    },
    isInputNumber () {
      return this.template == 'input' && this.type === 'number';
    }
  },
  mounted() {
    this.changeFocus(this.focus);
    // ios端 type为number不生效，需要加入pattern"[0-9]*"
    if (this.type === 'number') {
      this.typePattern = '[0-9]*'
    }
  },
  methods: {
    inputEvent(e) {
      let value = e.target.value;
      if (this.isInputNumber) {
        e.target.value = getValBetweenMaxAndMin(value, this.maxValue, this.minValue);
      }
      this.$emit('input',e);
    },
    blurEvent(e) {
      let value = e.target.value;
      if (this.isInputNumber) {
        e.target.value = getValBetweenMaxAndMin(value, this.maxValue, this.minValue);
      }
      this.$emit('blur', e);
    },
    focusEvent(e) {
      this.$emit('focus', e);
    },
    // support enter key event
    keyupEvent (e) {
      const customKeyType = this.returnKeyType
      if (customKeyType) {
        const code = e.keyCode
        let key = e.key
        if (code === 13) {
          if (!key || key.toLowerCase() === 'tab') {
            key = 'next'
          }
          this.$emit('confirm', e)
        }
      }
    },
    changeFocus(focus) {
        let ref = 'c-' + this.template;
        if(focus) {
            this.$refs[ref].focus();
        } else {
            this.$refs[ref].blur();
        }       
    }
  }
}

</script>
<style scoped>
input::-webkit-input-placeholder {
  line-height: normal;
}
</style>