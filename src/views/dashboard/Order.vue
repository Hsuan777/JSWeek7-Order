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
            <!-- TODO: 編輯訂單，出貨狀態、維修狀態 -->
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
              <div class="btn-group">
                <button
                  class="btn btn-secondary"
                  @click="copyData('edit', item)"
                >修改</button>
                <!-- <button
                  class="btn btn-outline-danger"
                  @click="copyData('delete', item)"
                >刪除</button> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- edit Modal -->
    <div
      class="modal fade"
      id="editOrderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editOrderModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white font-weight-bold">{{ modalTitle }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="temporary.user">
            <form action="#">
              <div class="form-row">
                <div class="col-12">
                  <div class="form-group">
                    <label>訂購人</label>
                    <input
                      type="text"
                      :placeholder="temporary.user.name"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="isUp"
                      class="form-check-input"
                    />
                    <label for="isUp" class="form-check-label">出貨狀態</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateData"
              data-dismiss="modal"
            >Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete Modal -->
    <!-- <div
      class="modal fade"
      id="deleteOrderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteOrderModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-white font-weight-bold">刪除訂單</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body"  v-if="temporary.user">
            <h3>
              是否刪除
              <span class="text-danger">{{ temporary.user.name }} 的訂單</span> ?
            </h3>
            <p>刪除後將無法復原 !</p>
            <p>信箱: {{ temporary.user.email }}</p>
            <p>電話: {{ temporary.user.tel }}</p>
            <p>地址: {{ temporary.user.address }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="deleteData"
              data-dismiss="modal"
            >Delete</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      hexAPI: {
        data: []
      },
      temporary: {},
      modalTitle: '',
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
    },
    /* 複製資料 */
    copyData (action, item) {
      const vm = this
      vm.isLoading = true
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}`)
        .then((res) => {
          vm.temporary = Object.assign({}, res.data.data)
          console.log(vm.temporary)
          vm.modalTitle = vm.temporary.user.name
          vm.isLoading = false
          if (action === 'edit') {
            $('#editOrderModal').modal('show')
          }
          // else if (action === 'delete') {
          //   $('#deleteOrderModal').modal('show')
          // }
        })
    },
    /* 修改資料 */
    updateData () {
      const vm = this
      vm.isLoading = true
      if (vm.temporary.id) {
        vm.hexAPI.data.forEach((item) => {
          if (vm.temporary.id === item.id) {
            vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
            vm.axios
              .patch(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${vm.temporary.id}`, vm.temporary)
              .then(() => {
                vm.getData()
                vm.cleanData()
              })
          }
        })
      } else {
        vm.addData()
      }
      vm.cleanData()
    },
    // /* 刪除資料 */
    // deleteData () {
    //   const vm = this
    //   vm.isLoading = true
    //   vm.hexAPI.data.forEach((item) => {
    //     if (vm.temporary.id === item.id) {
    //       vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
    //       vm.axios
    //         .delete(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${vm.temporary.id}`)
    //         .then(() => {
    //           vm.getData()
    //           vm.cleanData()
    //           vm.isLoading = false
    //         })
    //     }
    //   })
    // },
    cleanData () {
      this.temporary = {}
    }
  },
  created () {
    this.getData()
  }
}
</script>
