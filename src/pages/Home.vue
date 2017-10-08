<template>
    <div>
    
        <div class="title">
            <h1>{{ msg }}</h1>
        </div>
    
        <div>
            <button @click="showRegister()">Register</button>
            
            <form v-if="registerShow">
                <input type="text" name="first_name" v-model="model.first_name" placeholder="First Name"/>
                <input type="text" name="last_name" v-model="model.last_name" placeholder="Last Name"/>
                <input type="email" name="email" v-model="model.email" placeholder="Email"/>
                <input type="password" name="password" v-model="model.password" placeholder="Password"/>
                <input type="password" name="password_confirmation" v-model="model.password_confirmation" placeholder="Confirm Password"/>
                <button type="button" @click="submit()">Register</button>
            </form>
        </div>

        <div>
            <button @click="showLogin()">Login</button>
            <form v-if="loginShow">
                <input type="email" name="email" v-model="model.email" placeholder="Email"/>
                <input type="password" name="password" v-model="model.password" placeholder="Password"/>
                <button type="button" @click="login()">Login</button>
            </form>
        </div>
        
        <div v-if="error">
            <p>{{ error }}</p>
        </div>
   
    </div>
</template>

<script>
import auth from '../auth/index'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Let\'s Make Some Food!',
      model: {},
      error: '',
      loginShow: false,
      registerShow: false,
    }
  },
  methods: {
    submit() {
        auth.signup(this, this.model, 'recipes')
    },
    login() {
        auth.login(this, this.model, 'recipes')
    },
    showRegister() {
        this.loginShow = false
        this.registerShow = true
    },
    showLogin() {
        this.loginShow = true
        this.registerShow = false
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
