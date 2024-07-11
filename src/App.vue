<template>
  <div id="app">
    <div id="nav">
      <div class="nav-logo"><img src="./assets/MonLogo.png" alt="Mon logo" class="logo"></div>
      <div class="nav-lien">
        <div class="lien"><router-link to="/">Home</router-link> </div>
        <div class="lien"><router-link to="/about">About</router-link></div>
        <div class="lien"><router-link to="/contact">Contact</router-link></div>
        <div class="lien"><router-link to="/login">Login</router-link></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  background-color: #2c3e50;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }

  }
  a:hover{
    color: chocolate;
  }
}
.nav-logo{
  width: 5%;

}
.nav-lien{
  text-align: center;
  display: flex;
  width: 95%;
}
a:hover{
  color: chocolate;
}
.lien{
  margin: auto
}

.logo{
  width: 100%;
  margin-left: 0%;
}
</style>