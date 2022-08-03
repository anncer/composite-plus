<template>
  <i class="e-icon" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, isUndefined } from '@composite-plus/utils'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'EIcon',
  inheritAttrs: false,
})
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color,
  }
})
</script>
