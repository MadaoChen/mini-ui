<template>
  <div class="home">
    <panel></panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import panel from '@/components/panel/index.vue'

export default defineComponent({
  name: 'Home',
  components: { panel },
})
</script>
