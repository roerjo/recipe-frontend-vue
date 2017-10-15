<template>
    <div>
        <h2>Create a Recipe</h2>
        <recipe-form @save-recipe="addRecipe(recipe)" :recipe="recipe" :isUpdating="isUpdating">
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
            recipe: {
                name: '',
                description: '',
                instructions: '',
                ingredients: [],
            },
            isUpdating: false,
        }
    },
    methods: {
        addRecipe (recipe) {
            axios.post("http://recipe.app:8000/api/v1/recipe", recipe)
                .then((stuff) => {
                    this.$router.push('/recipe')  
                })
                .catch((err) => {
                    console.log(err.response.data)
                })
        }
    },
    components: {
        'recipe-form': RecipeForm,
    }
}
</script>
