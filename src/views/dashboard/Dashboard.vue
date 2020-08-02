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
              <router-link to="/admin/products" class="nav-link">管理房間</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- router-link的頁面會被放入 router-view -->
    <router-view :token="token.api_token" v-if="checkSucces" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: {
        api_token: ''
      },
      checkSucces: false
    }
  },
  created () {
    this.checkToken()
  },
  methods: {
    checkToken () {
      const vm = this
      // eslint-disable-next-line
      vm.token.api_token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      if (vm.token.api_token === '') {
        vm.$router.push('/')
      } else {
        vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
        vm.axios
          .post(`${process.env.VUE_APP_APIPATH}auth/check`, vm.token)
          .then((res) => {
            vm.checkSucces = true
          })
          .catch(() => vm.$router.push('/'))
      }
    }
  }
}
</script>
