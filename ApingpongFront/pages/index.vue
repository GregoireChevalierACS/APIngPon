<template>
  <!-- <Tutorial/> -->
  <div class="container">
    <div>Salut</div>
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="player in Players" :key="player.id">
        {{ player.FirstName }} {{ player.LastName }} , {{ player.DateOfBirth }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Players: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.Players = await this.$strapi.$Players.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
