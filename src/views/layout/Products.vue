<template>
  <section class="container mt-6">
    <loading :active.sync="isLoading"></loading>
    <h2 class="mt-2 mb-5 font-weight-bold">行李箱</h2>
    <!-- 將 購物車作為元件 -->
    <!-- <button
      type="button"
      class="shoppingTop btn btn-secondary btn-lg text-decoration-none d-flex p-2"
      data-toggle="modal"
      data-target="#shoppingModal"
    >
      <span class="material-icons">shopping_cart</span>
      <sup class="text-danger ml-n1">{{ shopping.data.length }}</sup>
    </button> -->

    <cart :shopping="apiShoppingData"></cart>
    <ul class="list__products row list-unstyled mb-5">
      <li class="col-12 col-md-6 col-lg-4" v-for="(item) in hexAPI.data" :key="item.id">
        <div class="card mb-3">
          <img :src="item.imageUrl[0]" class="img-fluid rounded-top">
          <div class="card-body">
            <h5 class="font-weight-bold">{{item.title}}</h5>
            <small v-for="(color, index) in item.options.colors" :key="index" class="mr-2">{{color}}</small>
            <p class="mt-2">{{item.content}}</p>
            <div class="d-flex justify-content-between">
              <p class="mb-0">
                原價 : <del>{{item.origin_price}}</del>
              </p>
              <p class="mb-0">特價 : {{item.price}}</p>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <router-link :to="`/product/${item.id}`" class="btn btn-primary">More</router-link>
            <button type="button" class="btn btn-info" @click="addShopping(item.id)">加入購物車</button>
          </div>
        </div>
      </li>
    </ul>

    <div class="d-flex justify-content-center ">
      <!-- :pages="pagination" 的 pagination是由這裡的 data所定義的，因為前面有使用 v-bind-->
      <pagination :pages="pagination" @emit-pages="getData"></pagination>
    </div>
  </section>
</template>

<script type="module">
import Pagination from '@/components/Pagination.vue'
import Cart from '@/components/Cart.vue'
export default {
  components: {
    Pagination,
    Cart
  },
  data () {
    return {
      hexAPI: {
        data: [],
        product: {}
      },
      apiShoppingData: {
        data: [],
        moneyTotal: 0
      },
      temporary: {
        product: '',
        quantity: 1
      },
      pagination: {},
      isLoading: false
    }
  },
  methods: {
    getData (page = 1) {
      const vm = this
      vm.isLoading = true
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?page=${page}`
        )
        .then((response) => {
          vm.hexAPI.data = response.data.data
          vm.pagination = response.data.meta.pagination
          vm.isLoading = false
        })
    },
    addShopping (pid) {
      const vm = this
      vm.isLoading = true
      vm.temporary = {}
      vm.temporary.product = pid
      vm.temporary.quantity = 1
      vm.axios
        .post(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`,
          vm.temporary
        )
        .then(() => {
          vm.getShopping()
          alert('已成功加入購物車~')
          vm.isLoading = false
        })
        .catch(() => {
          alert('商品已存在，請修改數量即可~')
          vm.isLoading = false
        })
    },
    getShopping () {
      const vm = this
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        )
        .then((response) => {
          vm.apiShoppingData.data = response.data.data
          let total = 0
          vm.apiShoppingData.data.forEach((item) => {
            total += item.product.price * item.quantity
          })
          vm.apiShoppingData.moneyTotal = total
          vm.isLoading = false
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
