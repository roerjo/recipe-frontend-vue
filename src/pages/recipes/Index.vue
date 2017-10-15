<template>
    <div class="row justify-content-around">
        <h3 class="col-lg-12 text-center">All Your Recipes</h3>
        <recipe @update-recipe="updateRecipe" v-for="recipe in recipes" :recipe="recipe"></recipe>
    </div>
</template>

<script>
import axios from 'axios'
import Recipe from '@/components/recipes/Recipe.vue'

export default {
    
    name: 'index',
    
    data () {
        return {
            recipes: [],
        }
    },

    mounted () {
        return this.getRecipes()
    },

    methods: {
        getRecipes () {
            axios.get("recipe")
                .then((stuff) => {
                    
                    for (let recipe of stuff.data.recipes) {
                        recipe.instructions = recipe.instructions.replace(/(?:\r\n|\r|\n)/g, '<br />');
                        this.recipes.push(recipe)
                    }

                })
                .catch((err) => {
                    console.log(err.response.data)
                })
        },
        updateRecipe () {
            this.recipes = []
            this.getRecipes()
        },
    },

    components: {
        'recipe': Recipe,
    }
      
}
</script>
