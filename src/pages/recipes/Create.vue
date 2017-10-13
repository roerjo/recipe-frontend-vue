<template>
    <div>
        <div class="title">
            <h1>{{ msg }}</h1>
        </div>
        <recipe-form @save-recipe="addRecipe" :model="model" :ingredients="ingredients" :isUpdating="isUpdating">
        </recipe-form>
    </div>
</template>

<script>
import RecipeForm from '@/components/recipes/RecipeForm.vue'
import axios from 'axios'
import auth from '@/auth/index'

export default {
  name: 'create',
  data () {
    return {
      msg: 'Create a new recipe!',
      model: {
        recipe: {
            name: '',
        },
        ingredients: [],
      },
      ingredients: [
        {
            id: 1,
            name: 'pasta',
        },
        {
            id: 2,
            name: 'sauce',
        },
      ],
      isUpdating: true,
    }
  },
  methods: {
      addRecipe (model) {
          console.log(model)
          axios.post("http://recipe.app:8000/api/v1/recipe", model, {headers: auth.getAuthHeader()})
              .then((stuff) => {
                  console.log(stuff)
              })
              .catch((err) => {
                  console.log(err.response.data)
              })
      }
  },
  components: {
      'recipe-form': RecipeForm
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

