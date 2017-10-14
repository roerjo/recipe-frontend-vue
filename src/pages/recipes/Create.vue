<template>
    <div>
        <recipe-form @save-recipe="addRecipe(model)" :model="model" :isUpdating="isUpdating">
        </recipe-form>
    </div>
</template>

<script>
import RecipeForm from '@/components/recipes/RecipeForm.vue'
import axios from 'axios'

export default {
  name: 'create',
  data () {
    return {
      model: {
        recipe: {
            name: '',
            description: '',
            instructions: '',
        },
        ingredients: [],
      },
      isUpdating: false,
    }
  },
  methods: {
      addRecipe (model) {
          console.log(model)
          axios.post("http://recipe.app:8000/api/v1/recipe", model)
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
