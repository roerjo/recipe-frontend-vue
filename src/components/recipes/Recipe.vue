<template>
    <div>    
        <div class="card col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div class="card-body">
                <h4 class="card-title">{{ recipe.name }}</h4>
                <p class="card-text">{{ recipe.description }}</p>
                <router-link :to="{ name: 'details', params: { id: recipe.id, recipe: recipe } }">
                    <button type="button" class="btn btn-primary">Details</button>
                </router-link>
                <router-link :to="{ name: 'update', params: { id: recipe.id, recipe: recipe } }">
                    <button type="button" class="btn btn-info">Update</button>
                </router-link>
                <button type="button" class="btn btn-danger" data-toggle="modal" :data-target="modalTarget">
                    Delete
                </button>
            </div>
        </div>
        <div class="modal fade" :id="modalId">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Are you sure you want to delete this recipe?</h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="deleteRecipe(recipe.id)" 
                                class="btn btn-danger" data-dismiss="modal">
                            Delete Recipe
                        </button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['recipe'],

    data () {
        return {
            modalTarget: '#recipe' + this.recipe.id,
            modalId: 'recipe' + this.recipe.id,
        }
    },

    methods: {
        deleteRecipe (recipeId) {
            axios.delete("http://recipe.app:8000/api/v1/recipe/" + recipeId)
                .then((data) => {
                    this.$emit('update-recipe')
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
</script>

<style scoped>
.card {
    max-width: 350px;
}

.modal-dialog {
    padding-top: 15%;
}
</style>
