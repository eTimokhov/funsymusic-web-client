<template>
  <b-row>
    <b-col>
      <div class="mt-5"></div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear: () => new Date().getFullYear()
  }
}
</script>

<style scoped>

</style>
