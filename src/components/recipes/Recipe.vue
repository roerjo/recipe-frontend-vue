<template>
    <router-link :to="{ name: 'details', params: { id: recipe.id, recipe: recipe } }">
        <div class="card col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div class="card-body">
                <h4 class="card-title">{{ recipe.name }}</h4>
                <p class="card-text">{{ recipe.description }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ['recipe'],
    }
</script>

<style scoped>
.card {
    max-width: 250px;
}
</style>
