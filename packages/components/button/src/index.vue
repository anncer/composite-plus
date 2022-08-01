<template>
  <button class="my-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
defineComponent({
  name: "CeButton",
});
defineEmits(["click"]);
</script>
