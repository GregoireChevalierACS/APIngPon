<template>
  <!-- <Tutorial/> -->
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="player in players" :key="player.id">
        {{ player.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      players: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.players = await this.$strapi.$players.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
