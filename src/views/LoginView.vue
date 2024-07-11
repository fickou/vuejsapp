<template>
    <div class="login">
        <h2>Login</h2>
        <input type="email" v-model="email" name="email" id="email" placeholder="Enter your email">
        <input type="password" v-model="password" name="password" id="password" placeholder="Enter your password">
        <button @click="traitement">Login</button>
        <div class="sign">
            <router-link to="/signUp">Créer un compte</router-link>
        </div>
    </div>    
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        traitement(){
            alert("Email : " + this.email + "\nPassword : " + this.password);
        }
    }
}
</script>

<style>
    .login{
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
        width: 400px;
        margin: auto;
        margin-top: 100px;
    }
    .login input{
        width: 90%;
        padding: 10px;
        margin-bottom: 15px;
        font-size: 100%;
    }
    .login button{
        width: 97%;
        padding: 10px;
        margin-bottom: 15px;
        font-size: 100%;
    }
    .login button:hover{
        background-color:rgb(98, 174, 27);
        cursor: pointer;
    }
</style>