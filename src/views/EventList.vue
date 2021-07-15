<template>
  <div>
    <h1>Event list</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue'
import EventSrvices from '../services/EventService'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventSrvices.getEvents()
    .then(response => {
      this.events = response.data;
    }).catch(err => {
      console.log(err.response);
    })
  },
}
</script>