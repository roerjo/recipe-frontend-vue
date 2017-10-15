<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{ recipe.name }}</h4>
            <p class="card-text">{{ recipe.description }}</p>
            <ul v-for="ingredient in recipe.ingredients">
                <li>{{ ingredient.amount }} {{ ingredient.name }} {{ ingredient.prepped }}</li>
            </ul>
            <p v-html="recipe.instructions" class="card-text"></p>
        </div>
    </div>
</template>

<script>
import Recipe from '@/components/recipes/Recipe.vue'

export default {
  name: 'details',
  props: ['recipe'],
  components: {
      'recipe': Recipe,
  }
}
</script>
