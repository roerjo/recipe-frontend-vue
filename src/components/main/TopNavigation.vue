<template>
    <nav v-if="authenticated" class="navbar navbar-expand-lg navbar-light mt-2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-center text-center" id="navContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/recipe" class="nav-link">All Your Recipes</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create" class="nav-link">Create a New Recipe</router-link>
                </li>
                <li class="nav-item">
                    <router-link @click.native="logout" to="" class="nav-link">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import auth from '@/auth/index'

export default {
    
    data () {
        return {
            authenticated: auth.checkAuth(),
        }
    },
    
    methods: {
      logout() {
          auth.logout()
          this.$router.go('/')
      }
    },
}
</script>

<style scoped>
.navbar {
    padding: .5rem 0;
}
</style>
