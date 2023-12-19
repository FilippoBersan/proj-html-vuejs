<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h3>
        <em>Broswe by category</em>
      </h3>
      <p>
        Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in.
        Nisi,vitae interdum eleifend dui, consequat nulla rhoncus dictum.
        Viverra.
      </p>
    </div>
  </div>

  <div class="boxes">
    <div class="container-box">
      <div class="slot">
        <div class="box">
          <img src="/public/product-8-300x300.jpg" alt="" />
        </div>
        <p>Bed(1)</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-3-300x300.jpg" alt="" />
        </div>
        <p>Food(6)</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-2-300x300.jpg" alt="" />
        </div>
        <p>Toys(6)</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-4-300x300.jpg" alt="" />
        </div>
        <p>Transport(6)</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 30px;

  .title {
    width: 500px;

    h3 {
      font-size: 30px;
    }

    p {
      letter-spacing: 0.3px;
      line-height: 25px;
    }
  }
}

.container-box {
  display: flex;
  justify-content: center;
  gap: 10px;
  .slot {
    text-align: center;
  }
  .box {
    display: flex;
    background-color: #f9f5f2;
    height: 300px;
    width: 300px;
  }
}
</style>
