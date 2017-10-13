<template>
    <form @submit.prevent="saveRecipe">
        <label>Recipe Name</label>
        <input type="text" placeholder="Name" v-model="model.recipe.name" v-validate="'required'" name="name" />
        <span v-show="errors.has('name')">Name is required</span>
        <label>Ingredients</label>
        <select type="text" v-model="model.ingredients" name="ingredients" multiple>
            <template v-for="ingredient in ingredients">
                <option :value="ingredient">{{ ingredient.name }}</option>
            </template>
        </select>
        <button type="submit">
            <span v-if="isUpdating">Update</span>
            <span v-else>Create</span>
        </button>
    </form>
</template>

<script>
    export default {
        props: ['model', 'ingredients', 'isUpdating'],
    
        methods: {
            saveRecipe: function () {
                this.$emit('save-recipe', this.model)
            }
        }
    }
</script>
