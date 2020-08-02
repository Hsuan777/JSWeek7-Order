<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-primary font-weight-bold">
      <div class="container">
        <router-link to="/" class="navbar-brand text-primary"> <h1 class="h2">Suitcase</h1> </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/products" class="nav-link">行李箱</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/repair" class="nav-link">快速維修</router-link>
            </li>
            <li class="nav-item ml-auto">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
// @import './assets/styles/main.scss';

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: white;
//     }
//   }
// }
</style>
