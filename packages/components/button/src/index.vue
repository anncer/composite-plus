<template>
  <button
    ref="_ref"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <span
      v-if="$slots.default"
    >
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { Text, computed, inject, ref, useSlots } from 'vue'
import { buttonEmits, buttonProps } from './button'

defineOptions({
  name: 'EButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()


const _ref = ref<HTMLButtonElement>()

const _type = computed(() => props.type || '')

// add space between two characters in Chinese



const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button size */
  /** @description button type */
  type: _type,
})
</script>
