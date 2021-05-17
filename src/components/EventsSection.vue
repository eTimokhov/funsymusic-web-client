<script>

import EventTile from '@/components/EventTile'

export default {
  name: 'EventsSection',
  components: {
    'event-tile': EventTile
  },
  props: {
    events: {
      type: Array,
      default () {
        return []
      }
    },
    header: {
      type: String,
      default: () => 'Events'
    },
    description: {
      type: String,
      default: 'Latest events'
    },
    noEventsMessage: {
      type: String,
      default: 'No events'
    }
  },
  data () {
    return {

    }
  },
  computed: {

  }

}
</script>

<template>
  <div>
    <h2>{{ header }}</h2>
    <p v-if="description && events.length">{{ description }}</p>
    <p v-if="!events.length">{{ noEventsMessage }}</p>
    <event-tile
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<style scoped>

</style>
