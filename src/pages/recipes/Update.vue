<template>
    <div>
        <h2>Update a Recipe</h2>
        <recipe-form @save-recipe="updateRecipe(recipe)" :recipe="recipe" :isUpdating="isUpdating">
        </recipe-form>
    </div>
</template>

<script>
import RecipeForm from '@/components/recipes/RecipeForm.vue'
import axios from 'axios'

export default {
    name: 'update',
    props: ['recipe'],
    data () {
        return {
            isUpdating: true,
        }
    },
    methods: {
        updateRecipe (recipe) {
            axios.put("recipe/" + recipe.id, recipe)
                .then((stuff) => {
                    this.$router.push('/recipe')  
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    components: {
        'recipe-form': RecipeForm,
    },
}
</script>
