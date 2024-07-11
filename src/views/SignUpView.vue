<template>
    <div class="login">
      <h2>Sign Up</h2>
      <input type="text" v-model="nom" name="lastname" id="lastname" placeholder="Enter your last name">
      <input type="text" v-model="prenom" name="firstname" id="firstname" placeholder="Enter your first name">
      <input type="email" v-model="email" name="email" id="email" placeholder="Enter your email">
      <input type="password" v-model="password" name="password" id="password" placeholder="Enter your password">
      <button @click="traitement">Sign Up</button>
      <div class="log">
        <router-link to="/listeUsers">Login</router-link>
      </div>
    </div>    
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "SignUpView",
    data() {
      return {
        nom: '',
        prenom: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async traitement() {
        if (this.nom==="" || this.prenom==="" || this.email==="" || this.password==="") {
          alert("Veillez remplir tous les champs");
        }
        else{
          try {
            const response = await axios.post('http://localhost:3000/signup', {
              nom: this.nom,
              prenom: this.prenom,
              email: this.email,
              password: this.password
            });
            alert("Utilisateur créé avec ID: " + response.data.id);
          } catch (error) {
            console.error("Une erreur s'est produite!", error);
          }
        }
        
      }
    }
  }
  </script>
  
  <style>
  .login {
    border: 1px solid black;
    width: 400px;
    margin: auto;
    margin-top: 100px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .login input {
    width: 90%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .login button {
    width: 97%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 100%;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50;
    color: white;
  }
  .login button:hover {
    background-color: #45a049;
    cursor: pointer;
  }
  .login .log {
    text-align: center;
    margin-top: 15px;
  }
  .login .log a {
    text-decoration: none;
    color: #4CAF50;
  }
  </style>
  