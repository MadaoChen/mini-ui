<template>
  <div :class="$style.panel">
    <div :class="$style.panel_title" @click="checkout()">
      <div>{{ title }}</div>
      <div :class="$style.panel_iconBox" v-if="showToggle">
        <i :class="iconClass"></i>
      </div>
    </div>
    <transition name="fade" enter-active-class="active" leave-active-class="leave">
      <div v-show="isExpendCopy" :class="$style.panel_cont">
        <slot name="default"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, ref, defineComponent, computed } from 'vue'

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
  setup(props) {
    const { proxy } = getCurrentInstance() as any
    let isExpendCopy = ref(props.expend)
    return {
      isExpendCopy,
      iconClass: computed(() => {
        if (isExpendCopy.value) {
          return [proxy.$style.panel_title_icon, proxy.$style.panel_title_icon__active, proxy.$style.mini_icon_xiangshang2]
        } else {
          return [proxy.$style.panel_title_icon, proxy.$style.mini_icon_xiangshang2]
        }
      }),
      checkout() {
        if (props.showToggle) {
          isExpendCopy.value = !isExpendCopy.value
        }
      },
    }
  },
})
</script>

<style lang="scss" module>
@import '@/styles/index.scss';
@import './index.scss';
</style>
