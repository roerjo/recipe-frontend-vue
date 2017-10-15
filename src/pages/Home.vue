<template>
    <div id="home">
        <h1>{{ msg }}</h1>
        
        <div class="col-lg-12 text-center my-3"> 
            <button @click="showRegister()" class="btn">Register</button>
            <button @click="showLogin()" class="btn">Login</button>
        </div> 

        <form v-if="registerShow">
            
            <div class="form-group">
                <input type="text" name="first_name" v-model="model.first_name" placeholder="First Name"/>
            </div>
            <div class="form-group">
                <input type="text" name="last_name" v-model="model.last_name" placeholder="Last Name"/>
            </div>
            <div class="form-group">
                <input type="email" name="email" v-model="model.email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <input type="password" name="password" v-model="model.password" placeholder="Password"/>
            </div>
            <div class="form-group">
                <input type="password" name="password_confirmation" v-model="model.password_confirmation" placeholder="Confirm Password"/>
            </div>

            <button type="button" @click="submit()" class="btn btn-primary">Register</button>
        </form>

        <form v-if="loginShow">
            
            <div class="form-group">
                <input type="email" name="email" v-model="model.email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <input type="password" name="password" v-model="model.password" placeholder="Password"/>
            </div>
            
            <button type="button" @click="login()" class="btn btn-primary">Login</button>
        </form>
        
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
#home {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
}
h1 {
    width: 100%;
    text-align: center;
}
</style>
