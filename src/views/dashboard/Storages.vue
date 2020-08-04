<template>
  <section class="container">
    <div class="d-flex align-items-center">
      <h2 class="font-weight-bold d-flex justify-content-between mr-3 my-5">檔案列表</h2>
      <loading :active.sync="isLoading"></loading>
    </div>
    <div class="d-flex justify-content-end mb-2">
      <button
        type="button"
        class="btn btn-primary btn-lg px-3"
        data-toggle="modal"
        data-target="#addCouponModal"
        @click="initData"
      >新增檔案</button>
    </div>
    <div class="table-responsive">
      <table class="table border-bottom">
        <thead>
          <tr>
            <th scope="row" class="text-nowrap">檔案名稱</th>
            <th scope="row" width="300px">縮圖</th>
            <th scope="row" class="text-nowrap">編輯</th>
          </tr>
        </thead>
        <tbody class="p-0" v-if="hexAPI">
          <tr v-for="(item) in hexAPI.data" :key="item.id">
            <td class="align-middle">{{item.id}}</td>
            <td class="align-middle">
              <img :src="item.path" alt="">
            </td>
            <td class="pr-0">
              <button
                class="btn btn-secondary mr-2"
                @click="copyData(item)"
                data-toggle="modal"
                data-target="#addProductModal"
              >修改</button>
              <button
                class="btn btn-outline-danger mr-0"
                @click="copyData(item)"
                data-toggle="modal"
                data-target="#deleteProductModal"
              >刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- add/edit Modal -->
    <!-- <div
      class="modal fade"
      id="addCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addProductModalLabel"
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
          <div class="modal-body">
            <form action="#">
              <div class="form-row">
                <div class="col-6">
                  <div class="form-group">
                    <label for class>商品圖片</label>
                    <input
                      type="text"
                      placeholder="請輸入圖片網址"
                      class="form-control"
                      v-model="temporary.imageUrl[0]"
                    />
                  </div>
                  <img :src="temporary.imageUrl[0]" alt class="img-fluid">
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>檔案名稱</label>
                    <input
                      type="text"
                      placeholder="檔案名稱"
                      class="form-control"
                      v-model="temporary.title"
                    />
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
    </div> -->

    <!-- delete Modal -->
    <!-- <div
      class="modal fade"
      id="deleteCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addCouponModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-white font-weight-bold">刪除檔案</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>
              是否刪除
              <span class="text-danger">{{ temporary.title }}</span> ? 刪除後將無法復原 !
            </h3>
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
        data: {}
      },
      temporary: {},
      modalTitle: '',
      isLoading: false
    }
  },
  props: ['token'],
  methods: {
    getData (page = 1) {
      const vm = this
      vm.isLoading = true
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${page}`
        )
        .then((response) => {
          vm.hexAPI.data = response.data.data
          console.log(response)
          vm.isLoading = false
        })
    },
    /* 新增資料 */
    addData () {
      const vm = this
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        .post(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`, vm.temporary)
        .then(() => {
          vm.getData()
        })
    },
    /* 新建資料 */
    // 將 this.product的屬性值複製到暫存
    initData () {
      this.modalTitle = '新增檔案'
      this.temporary = Object.assign({}, this.coupon)
    },
    /* 複製資料 */
    // 將 v-for所取出的 item放入暫存
    copyData (item) {
      const vm = this
      $('#addCouponModal').modal('hide')
      vm.isLoading = true
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${item.id}`)
        .then((res) => {
          this.temporary = Object.assign({}, res.data.data)
          vm.modalTitle = this.temporary.title
          vm.isLoading = false
          $('#addCouponModal').modal('show')
        })
    },
    /* 修改資料 */
    updateData () {
      const vm = this
      if (vm.temporary.id) {
        vm.hexAPI.data.forEach((item) => {
          if (vm.temporary.id === item.id) {
            vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
            // patch跟 post一樣需要兩個參數 patch(`API網址`, 單一物件資料)，否則不會變更
            vm.axios
              .patch(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${vm.temporary.id}`, vm.temporary)
              .then(() => {
                vm.getData()
                vm.cleanData()
                vm.modalTitle = vm.temporary.title
              })
          }
        })
      } else {
        vm.addData()
      }
      vm.cleanData()
    },
    /* 刪除資料 */
    deleteData () {
      const vm = this
      vm.isLoading = true
      vm.hexAPI.data.forEach((item) => {
        if (vm.temporary.id === item.id) {
          vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
          vm.axios
            .delete(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${vm.temporary.id}`)
            .then(() => {
              vm.getData()
              vm.cleanData()
              vm.isLoading = false
            })
        }
      })
    },
    // 工具類 //
    cleanData () {
      this.temporary = {}
    }
  },
  created () {
    this.getData()
  }
}
</script>
