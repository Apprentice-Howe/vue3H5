<template>
    <button
            class="t-btn"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
          border: {
              type: String,
              default: 'none'
          }
        },
      setup() {}
    }
</script>

<style scoped>

</style>