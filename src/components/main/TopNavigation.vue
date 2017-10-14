<template>
    <nav v-if="authenticated">
        <router-link to="/recipe">All Your Recipes</router-link>
        <router-link to="/create">Create a New Recipe</router-link>
        <router-link to="/recipe/delete">Delete a New Recipe</router-link>
        <router-link to="/recipe/update">Update a New Recipe</router-link>
        <router-link @click.native="logout" to="">Logout</router-link>
    </nav>
</template>

<script>
import auth from '@/auth/index'

export default {
    
    computed: {
        authenticated () { return auth.checkAuth() }
    },
    
    methods: {
      logout() {
          auth.logout()
          this.$router.go('/')
      }
    },
}
</script>
