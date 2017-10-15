<template>
    <div class="container">
        <top-navigation></top-navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import TopNavigation from '@/components/main/TopNavigation'

export default {

    components: {
        'top-navigation': TopNavigation,
    }

}
</script>

<style scoped>
.container {
    height: 100%;
}
</style>

