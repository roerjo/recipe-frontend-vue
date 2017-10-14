<template>
    <div class="row justify-content-around">
        <h3 class="col-lg-12 text-center">All Your Recipes</h3>
        <recipe v-for="recipe in recipes" :recipe="recipe"></recipe>
    </div>
</template>

<script>
import axios from 'axios'
import Recipe from '@/components/recipes/Recipe.vue'

export default {
    
    name: 'index',
    
    data () {
        return {
            recipes: [
                {
                    id: 5,
                    name: 'Mac \'n Cheese',
                    description: 'A delicious pasta dish',
                    instructions: 'Boil water, add pasta, cook for 10 min, drain, mix in cheese',
                    ingredients: [
                        {
                            name: 'pasta',
                            amount: '2 cups',
                            prepped: ''
                        },
                        {
                            name: 'cheese',
                            amount: '3 tblsp',
                            prepped: 'shredded'
                        }
                    ]
                },
            ],
        }
    },

    mounted () {
        return this.getRecipes()
    },

    methods: {
        getRecipes () {
            axios.get("http://recipe.app:8000/api/v1/recipe")
                .then((stuff) => {
                    
                    for (let recipe of stuff.data.recipes) {
                        this.recipes.push(recipe)
                    }
                    console.log(this.recipes)
                })
                .catch((err) => {
                    console.log(err.response.data)
                })
        },
    },

    components: {
        'recipe': Recipe,
    }
      
}
</script>

<style scoped>
</style>
