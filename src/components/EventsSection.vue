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
  <div class="col-md-9">
    <h4>Last events</h4>
    <p v-if="!events.length">This user hasn't done anything lately</p>
    <event-tile
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<style scoped>

</style>
