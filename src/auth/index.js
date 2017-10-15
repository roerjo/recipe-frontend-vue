import router from '../router/index'
import axios from 'axios'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    axios.post('login', creds)
        .then((data) => {

            localStorage.setItem('access_token', data.data)

            this.user.authenticated = true

            if(redirect) {
                router.go(redirect)        
            }

        })
        .catch((err) => {
            context.error = err.response.data
        })
  },

  signup(context, creds, redirect) {
    axios.post('login', creds)
        .then((data) => {
            
            localStorage.setItem('access_token', data.data)

            this.user.authenticated = true

            if(redirect) {
                router.go(redirect)        
            }

        })
        .catch((err) => {
            context.error = err.response.data
        })
  },

  logout() {
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('access_token')
    if(jwt) {
      return this.user.authenticated = true
    }
    else {
      return this.user.authenticated = false      
    }
  },

  getAuthHeader() {
    return 'Bearer ' + localStorage.getItem('access_token')
  }
}
