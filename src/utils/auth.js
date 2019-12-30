import axios from 'axios'

class Auth {
  constructor() {
    this.authenticated = window.localStorage.getItem('token') ? true : false
    this.token = window.localStorage.getItem('token')
  }

  async login(callback,user) {
    try {
      console.log(user)
      let response = await axios.post('http://127.0.0.1:3333/login',user);
    
      let data = response.data
      
      window.localStorage.setItem('token',data.token)
      this.authenticated = true;
      callback(response.status)
    } catch (error) {
      callback(400)
    }; 
  }

  logout(callback) {
    this.authenticated = false;
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
  getToken(){
    return this.token
  }

  signout(callback){
    window.localStorage.removeItem('token')
    callback();
  }
}

export default new Auth();
