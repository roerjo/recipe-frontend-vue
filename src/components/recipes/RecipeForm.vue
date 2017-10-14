<template>
    <form @submit.prevent="saveRecipe">
        <div class="form-group">
            <label for="recipe-name">Recipe Name</label>
            <input type="text" id="recipe-name" class="form-control" 
                   placeholder="Name..." v-model="model.recipe.name" 
                   v-validate="'required'"/>
            <span v-show="errors.has('name')">Name is required</span>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" id="description" class="form-control" 
                   placeholder="Description" v-model="model.recipe.description"/>
        </div>
        <div class="form-group">
            <div v-for="(ingredient, ind) in model.ingredients">
                <li>
                    {{ ingredient.amount }} {{ ingredient.name }} {{ ingredient.prepped }}
                    <button @click="removeIngredient(ind)" class="btn btn-sm">Remove Ingredient</button>
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
            <button @click="addIngredient(nextIngredient)" class="btn mt-3">Add another Ingredient</button>
        </div>
        <div class="form-group">
            <label for="instructions">Instructions</label>
            <textarea id="instructions" class="form-control" 
                   placeholder="Instructions..." v-model="model.recipe.instructions"
                   v-validate="'required'" rows="10"/>
            </textarea>
            <span v-show="errors.has('instructions')">Instructions are required</span>
            <p v-html=" model.recipe.instructions"></p>
        </div>
        <button  type="submit" class="btn btn-primary">
            <span v-if="isUpdating">Update</span>
            <span v-else>Create</span>
        </button>
    </form>
</template>

<script>
    export default {
        props: ['model', 'isUpdating'],
    
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
                this.model.ingredients.push(nextIngredient)
                this.nextIngredient = {
                    amount: '',
                    name: '',
                    prepped: '',
                }
            },
            removeIngredient (ind) {
                this.model.ingredients.splice(ind, 1)
            },
            saveRecipe () {
                console.log('firing')
                this.$emit('save-recipe', this.model)
            }
        }
    }
</script>
