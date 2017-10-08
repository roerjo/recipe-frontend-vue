<template>
    <div>
        <div class="title">
            <h1>{{ msg }}</h1>
            <p>Delete recipe number {{$route.params.id}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'delete',
  data () {
    return {
      msg: 'Delete recipes!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
