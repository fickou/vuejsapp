<script>
export default {
  name: 'BaseButton',
  emits: ['click'] // Déclarez les événements que vous souhaitez émettre
}
</script>

<template>
  <button v-bind="$attrs" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<style></style>
