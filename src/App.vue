<template>
  <div id="app">
    <nav>
        <div class="container" v-if="authenticated">
            <router-link to="/recipes">All Your Recipes</router-link>
            <router-link to="/recipes/create">Create a New Recipe</router-link>
            <router-link to="/recipes/delete">Delete a New Recipe</router-link>
            <router-link to="/recipes/update">Update a New Recipe</router-link>
            <router-link @click.native="logout" to="">Logout</router-link>
        </div>
    </nav>

    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import auth from '@/auth/index'

export default {
  name: 'app',
  computed: {
      authenticated () { return auth.checkAuth() }
  },
  methods: {
      logout() {
          auth.logout()
          this.$router.go('/')
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
