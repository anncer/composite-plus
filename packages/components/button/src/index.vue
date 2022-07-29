<template>
  <button class="my-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineOptions({
  name: "CeButton"
});
defineEmits(["click"]);
</script>
