<template>
    <form @submit="saveRecipe">
        
        <div class="form-group">
            <label for="recipe-name">Recipe Name</label>
            <input type="text" id="recipe-name" class="form-control" 
                   placeholder="Name..." v-model="recipe.name" required/>
        </div>
        
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" id="description" class="form-control" 
                   placeholder="Description" v-model="recipe.description"/>
        </div>
        
        <div class="form-group">
            <div v-for="(ingredient, ind) in recipe.ingredients">
                <li>
                    {{ ingredient.amount }} {{ ingredient.name }} {{ ingredient.prepped }}
                    <button @click="removeIngredient(ind)" type="button" class="btn btn-sm">Remove Ingredient</button>
                </li>
            </div>
            <label for="amount">Amount of Ingredient</label>
            <input type="text" id="amount" class="form-control" 
                   placeholder="2 cups, 1 teaspoon, etc..."
                   v-model="nextIngredient.amount"/>
            <label for="name">Name of Ingredient</label>
            <input type="text" ide="name" class="form-control" placeholder="Name..."
                   v-model="nextIngredient.name"/>
            <label for="prepped">Prep Type</label>
            <input type="text" id="prepped" class="form-control" placeholder="sliced, diced, etc..."
                   v-model="nextIngredient.prepped"/>
            <button @click.prevent="addIngredient(nextIngredient)" class="btn mt-3">Add Ingredient</button>
        </div>
        
        <div class="form-group">
            <label for="instructions">Instructions</label>
            <textarea id="instructions" class="form-control" 
                   placeholder="Instructions..." v-model="recipe.instructions" rows="10" required/>
            </textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">
            <span v-if="isUpdating">Update</span>
            <span v-else>Create</span>
        </button>
    
    </form>
</template>

<script>
export default {
    props: ['recipe', 'isUpdating'],

    data () {
        return {
            nextIngredient: {
              amount: '',
              name: '',
              prepped: '',
            },
        }
    },
    methods: {
        addIngredient (nextIngredient) {
            if (!nextIngredient.name) {
                alert("An ingredient must have a name")
            } else {
                this.recipe.ingredients.push(nextIngredient)
                this.nextIngredient = {
                    amount: '',
                    name: '',
                    prepped: '',
                }
            }
        },
        removeIngredient (ind) {
            this.recipe.ingredients.splice(ind, 1)
        },
        saveRecipe () {
            if (this.recipe.ingredients.length === 0) {
                alert("You must add at least one ingredient")
            } else {
                this.$emit('save-recipe', this.recipe)
            }
        }
    }
}
</script>
