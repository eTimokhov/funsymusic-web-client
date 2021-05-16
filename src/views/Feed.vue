<script>

import EventDataService from '@/services/EventDataService'
import EventsSection from '@/components/EventsSection'

export default {
  name: 'Users',
  components: {
    'events-section': EventsSection
  },
  data () {
    return {
      subsEvents: null
    }
  },
  computed: {
    currentUser () {
      return this.$store.state?.auth?.user
    }
  },
  methods: {
    async retrieveSubsEvents () {
      const response = await EventDataService.getBySubs()
      this.subsEvents = response.data.events
    }
  },
  async mounted () {
    await this.retrieveSubsEvents()
  }
}
</script>

<template>
  <div>
    <h1>Events page</h1>
    <events-section
      v-if="subsEvents"
      :events="subsEvents"
    />
  </div>
</template>

<style scoped>

</style>
