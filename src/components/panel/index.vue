<template>
  <div class="panel">
    <div class="panel-title" @click="checkout()">
      <div>{{ title }}</div>
      <div v-if="showToggle" style="float: right; height: 0.057rem; position: relative; top: -0.08rem">
        <i :class="iconClass"></i>
      </div>
    </div>
    <transition name="fade" enter-active-class="active" leave-active-class="leave">
      <div v-show="isExpendCopy" class="panel-cont">
        <slot name="default"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  name: 'panel',
  props: {
    title: {
      type: String,
      default: '默认标题',
    },
    showToggle: {
      type: Boolean,
      default: true,
    },
    expend: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    props = reactive(props)
    let isExpendCopy = props.expend
    return {
      isExpendCopy: props.expend,
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      checkout() {
        if (props.showToggle) {
          this.isExpendCopy = !this.isExpendCopy
        }
      },
    }
  },
  methods: {
    checkout: function () {
      if (this.showToggle) {
        this.isExpendCopy = !this.isExpendCopy
      }
    },
  },
  computed: {
    iconClass() {
      if (this.isExpendCopy) {
        return 'panel-title-icon panel-title-icon__active mf-icon-xiangshang2'
      } else {
        return 'panel-title-icon mf-icon-xiangshang2'
      }
    },
  },
})
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
