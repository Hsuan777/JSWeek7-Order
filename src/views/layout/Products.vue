<template>
  <section class="container">
    <loading :active.sync="isLoading"></loading>
    <h2 class="mt-2 mb-5 font-weight-bold">行李箱</h2>
    <button
      type="button"
      class="shoppingTop btn btn-secondary btn-lg text-decoration-none d-flex p-2"
      data-toggle="modal"
      data-target="#shoppingModal"
    >
      <span class="material-icons">shopping_cart</span>
      <sup class="text-danger ml-n1">{{ shopping.data.length }}</sup>
    </button>
    <ul class="list__products row list-unstyled">
      <li class="col-4" v-for="(item) in hexAPI.data" :key="item.id">
        <div class="card mb-3">
          <img :src="item.imageUrl[0]" class="img-fluid rounded-top" />
          <div class="card-body">
            <h5 class="font-weight-bold">{{item.title}}</h5>
            <p>{{item.content}}</p>
            <div class="d-flex justify-content-between">
              <p class="mb-0">
                原價 :
                <del>{{item.origin_price}}</del>
              </p>
              <p class="mb-0">早鳥 : {{item.price}}</p>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <!-- 產品細節方案一 : 使用 modal打開 -->
            <!-- <button type="button" class="btn btn-secondary"  @click="viewRoom(item.id)" data-toggle="modal"
      data-target="#viewRoomModal">預覽房型</button> -->
            <!-- 產品細節方案二 : 更改路由，重新渲染畫面 -->
            <router-link :to="`/product/${item.id}`" class="btn btn-secondary">預覽房型</router-link>
            <button type="button" class="btn btn-primary" @click="addShopping(item.id)">預定房間</button>
          </div>
        </div>
      </li>
    </ul>

    <!-- shopping Modal -->
    <div
      class="modal fade"
      id="shoppingModal"
      ref="shoppingModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title font-weight-bold">購物車列表</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>房間名稱</th>
                  <th class="text-right">價格</th>
                  <th class="text-center">間數</th>
                  <th class="text-center">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in shopping.data" :key="index" class="border-top">
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle text-right">{{ item.product.price }}</td>
                  <td class="align-middle text-center">{{ item.quantity }}</td>
                  <td class="align-middle text-center">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="deleteShopping( item.product.id )"
                    >刪除</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 class="text-right mr-4">總計金額 : NT.{{ shopping.moneyTotal }}</h3>
            <div class="modal-footer d-flex justify-content-around border-0">
              <button type="button" class="btn btn-primary" @click="deleteAll">Clean</button>
              <a href class="btn btn-info" @click.prevent="pay">結帳</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- viewRoom Modal -->
    <div
      class="modal fade"
      id="viewRoomModal"
      ref="viewRoomModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title font-weight-bold">{{ hexAPI.product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ hexAPI.product.content }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      hexAPI: {
        data: [],
        product: {}
      },
      temporary: {
        product: '',
        quantity: '1'
      },
      shopping: {
        data: [],
        moneyTotal: 0
      },
      isLoading: false
    }
  },
  methods: {
    getData () {
      const vm = this
      vm.isLoading = true
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
        )
        .then((response) => {
          vm.hexAPI.data = response.data.data
          vm.isLoading = false
        })
    },
    // 產品細節方案一 : 使用 modal，但需要重新讀取，造成每次預覽點擊會有等待時間
    // viewRoom (pid) {
    //   const vm = this
    //   // vm.isLoading = true // 會造成 Maximum call stack size exceeded.
    //   vm.axios
    //     .get(
    //       `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${pid}`
    //     )
    //     .then((response) => {
    //       vm.hexAPI.product = response.data.data
    //       // vm.isLoading = false
    //     })
    // },
    addShopping (pid) {
      const vm = this
      vm.isLoading = true
      vm.temporary.product = pid
      vm.axios
        .post(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`,
          vm.temporary
        )
        .then(() => {
          vm.getShopping()
        })
    },
    getShopping () {
      const vm = this
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        )
        .then((response) => {
          vm.shopping.data = response.data.data
          let total = 0
          vm.shopping.data.forEach((item) => {
            total += item.product.price
          })
          vm.shopping.moneyTotal = total
          vm.isLoading = false
        })
    },
    deleteShopping (delID) {
      const vm = this
      vm.isLoading = true
      vm.shopping.data.forEach((item) => {
        if (delID === item.product.id) {
          vm.axios
            .delete(
              `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${delID}`
            )
            .then(() => {
              vm.getShopping()
            })
        }
      })
    },
    deleteAll () {
      const vm = this
      vm.isLoading = true
      vm.axios
        .delete(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`
        )
        .then(() => {
          vm.getShopping()
          vm.isLoading = false
          $('#shoppingModal').modal('hide')
          // this.$refs.shoppingModal.modal('hide')
        })
    },
    pay () {
      const vm = this
      if (vm.shopping.data.length === 0) {
        alert('您未挑選房間喔!~')
        $('#shoppingModal').modal('hide')
      } else {
        vm.$router.push('/payment')
        $('#shoppingModal').modal('hide')
      }
    }
  },
  created () {
    this.getData()
    this.getShopping()
  }
}
</script>
