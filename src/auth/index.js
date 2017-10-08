import router from '../router/index'
import axios from 'axios'

// URL and endpoint constants
const API_URL = 'http://recipe.app:8000/'
const LOGIN_URL = API_URL + 'api/v1/login'
const SIGNUP_URL = API_URL + 'api/v1/register'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    axios.post(LOGIN_URL, creds)
        .then((data) => {

            localStorage.setItem('access_token', data.access_token)

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
    axios.post(SIGNUP_URL, creds)
        .then((data) => {
            
            localStorage.setItem('access_token', data.access_token)

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
    console.log(this.user.authenticated)
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}
