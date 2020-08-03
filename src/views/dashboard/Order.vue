<template>
  <section class="container">
    <div class="d-flex align-items-center">
      <h2 class="font-weight-bold d-flex justify-content-between mr-3 my-5">訂單</h2>
      <loading :active.sync="isLoading"></loading>
    </div>
    <div class="table-responsive">
      <table class="table border-bottom">
        <thead>
          <tr>
            <th scope="row" class="text-nowrap">訂單時間</th>
            <th scope="row" width="300px">訂購產品</th>
            <th scope="row" class="text-nowrap text-right">訂單金額</th>
            <th scope="row" class="text-nowrap">出貨狀態</th>
            <th scope="row" class="text-nowrap">編輯訂單</th>
          </tr>
        </thead>
        <tbody class="p-0">
          <tr v-for="(item) in hexAPI.data" :key="item.id">
            <td class="align-middle">{{item.created.datetime}}</td>
            <td class="align-middle">{{item.products[0].product.title}}</td>
            <td class="align-middle text-right">{{item.amount}}</td>
            <td class="align-middle">未出貨</td>
            <td class="pr-0">
              <button
                class="btn btn-secondary mr-0"
                data-toggle="modal"
                data-target="#deleteProductModal"
              >編輯</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      hexAPI: {
        data: []
      },
      isLoading: false
    }
  },
  props: ['token'],
  methods: {
    getData () {
      const vm = this
      vm.isLoading = true
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders`
        )
        .then((response) => {
          vm.hexAPI.data = response.data.data
          console.log(vm.hexAPI.data)
          vm.isLoading = false
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
