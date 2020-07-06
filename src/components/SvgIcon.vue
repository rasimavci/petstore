<template>
  <svg viewBox="0 0 20 20" class="icon">
    <use v-bind:xlink:href="'/icon/icons.svg' + href"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: String
  },
  computed: {
    href () {
      return `#${this.type}`
    }
  }
}
</script>
