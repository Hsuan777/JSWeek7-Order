<template>
  <main>
    <!-- Banner -->
    <section class="container-fluid mb-5">
      <div class="row">
        <div class="container banner__title">
          <div class="row h-100 align-items-center">
            <div class="col">
              <div class=" ">
                <h2 class="font-weight-bold mb-5">{{ title }}</h2>
                <!-- <button type="button" class="btn btn-primary btn-lg">快速維修</button> -->
                <div class="btn-group">
                  <router-link to="/repair" class="btn btn-primary btn-lg">快速維修</router-link>
                  <router-link to="/products" class="btn btn-secondary btn-lg">行李箱</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 banner__img"></div>
      </div>
    </section>
    <!-- 服務 -->
    <section class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <h3 class="d-flex flex-column align-items-center">
            <span class="material-icons h2 text-info">trip_origin</span>
            不分品牌
          </h3>
          <p>各式行李箱問題皆可維修</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3 class="d-flex flex-column align-items-center">
            <span class="material-icons h2 text-info">monetization_on</span>
            維修報價
          </h3>
          <p>上傳行李箱需維修處照片，立即為你確認可否維修及報價。</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3 class="d-flex flex-column align-items-center">
            <span class="material-icons h2 text-info">shutter_speed</span>
            精選零件
            </h3>
          <p>維修精選高品質零件，品質有保障，讓你的輪子.手把等配件不再容易被水解、氧化損壞。</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3 class="d-flex flex-column align-items-center">
            <span class="material-icons h2 text-info">filter_1</span>
            一年保固
          </h3>
          <p>本店維修零件提供您一年保固。</p>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data () {
    return {
      title: ' 台中行李箱維修'
    }
  }
}
</script>
