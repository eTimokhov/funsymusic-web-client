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
    <events-section
      v-if="subsEvents"
      :events="subsEvents"
      header="Feed"
      description="Latest events & actions of user that you subscribed"
      no-events-message="No events here"
    />
  </div>
</template>

<style scoped>

</style>
