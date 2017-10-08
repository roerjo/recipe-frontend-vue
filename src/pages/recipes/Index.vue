<template>
    <div>
        <div class="title">
            <h1>{{ msg }}</h1>
            <li><router-link to="/recipes/create">Create a New Recipe</router-link></li>
            <li><router-link to="/recipes/delete">Delete a New Recipe</router-link></li>
            <li><router-link to="/recipes/update">Update a New Recipe</router-link></li>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'All your sweet recipes!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
