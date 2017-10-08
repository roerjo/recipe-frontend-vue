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
export default {
  name: 'create',
  data () {
    return {
      msg: 'Create a new recipe!',
      model: {
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
      addRecipe: function (model) {
          console.log('model', model)
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

