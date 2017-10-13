<template>
    <div>
        <div class="title">
            <h1>{{ msg }}</h1>
            <router-view></router-view>
            <div class="container">
                <h1>Recipes</h1>
                <div v-for="recipe in recipes[0]">
                    <div class="recipe">
                        <h3>{{ recipe.name }}</h3>
                        <ul v-for="ingredient in recipe.ingredients">
                            <li>{{ ingredient.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import auth from '@/auth/index'
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      msg: 'All your sweet recipes!',
      recipes: [],

    }
  },
  mounted () {
        return this.getRecipes()
  },
  methods: {
      getRecipes () {
          axios.get("http://recipe.app:8000/api/v1/recipe", {headers: auth.getAuthHeader()})
              .then((stuff) => {
                  this.recipes.push(stuff.data.recipes)
                  console.log(this.recipes)
              })
              .catch((err) => {
                  console.log(err.response.data)
              })
      },
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
