<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <!--     <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul> -->
    <!-- <p>There are {{ catLength }} categories</p> -->
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    /* getEvent() {
      return this.$store.getters.getEventById
    }, */
    /* catLength() {
      return this.$store.getters.catLength
    }, */
    ...mapGetters(['getEventById']),
    ...mapState(['categories', 'user', 'id']), // <-- using object spread operator
  },

  /*   doneTodos: (state) => {
    return state.todos.filter((todo) => todo.done)
  },
  activeTodosCount: (state) => {
    return state.todos.filter((todo) => !todo.done).length
  }, */
}
</script>
