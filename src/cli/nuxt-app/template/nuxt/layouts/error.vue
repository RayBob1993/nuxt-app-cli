<template>
  <div class="page page__error">
    <b>{{ error.statusCode }}</b>
    <div>
      {{ error.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageError',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">

</style>
