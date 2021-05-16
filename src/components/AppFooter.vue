<template>
  <b-row>
    <b-col>
      <div>Funsymusic &copy; {{ currentYear }}</div>
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
