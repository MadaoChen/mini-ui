<template>
  <div :class="$style.panel">
    <div :class="$style.panel_title" @click="checkout()">
      <div>{{ title }}</div>
      <div :class="$style.panel_iconBox" v-if="showToggle" style="">
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
import { getCurrentInstance, ref, defineComponent, reactive, computed } from 'vue'

function createArray(value: any, count: number): any[] {
  const arr: any[] = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}

const arr1 = createArray(11, 3)
const arr2 = createArray('aa', 3)
console.log(arr1[0].toFixed(), arr2[0].split(''))

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
          return [proxy.$style.panel_title_icon, proxy.$style.panel_title_icon__active, proxy.$style.mf_icon_xiangshang2]
        } else {
          return [proxy.$style.panel_title_icon, proxy.$style.mf_icon_xiangshang2]
        }
      }),
      // style: computed(() => ({
      //   backgroundColor: props.backgroundColor,
      // })),
      checkout() {
        if (props.showToggle) {
          // isExpendCopy = !isExpendCopy.value
        }
      },
    }
  },
  // methods: {
  //   checkout: function () {
  //     if (proxy.showToggle) {
  //       isExpendCopy = !isExpendCopy
  //     }
  //   },
  // },
})
</script>

<style lang="scss" module>
@import './index.scss';
</style>
