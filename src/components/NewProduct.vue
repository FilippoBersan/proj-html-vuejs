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
        <em>New products arrival</em>
      </h3>
      <p>Latest products</p>
    </div>
  </div>

  <div class="boxes">
    <div class="container-box-shop">
      <div class="slot-shop">
        <div class="box-shop">
          <img src="/public/product-8-300x300.jpg" alt="" />
        </div>
        <p>Colored pet bed</p>
        <p id="price">$18.00 - $ 26.00</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-2-300x300.jpg" alt="" />
        </div>
        <p>Colorful ball set</p>
        <p id="price">$29.00</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-3-300x300.jpg" alt="" />
        </div>
        <p>Dog bone</p>
        <div class="price-c">
          <p id="before-price">$29.00</p>
          <p id="price">$18.00</p>
        </div>
      </div>
    </div>

    <div class="container-box-shop">
      <div class="slot">
        <div class="box">
          <img src="/public/product-4-300x300.jpg" alt="" />
        </div>
        <p>Animal transport bag</p>
        <p id="price">$29.00</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-5-300x300.jpg" alt="" />
        </div>
        <p>Animal transport cage</p>
        <p id="price">$35.00</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-10-300x300.jpg" alt="" />
        </div>
        <p>Closable cat litter</p>
        <p id="price">$16.00</p>
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
      font-size: 25px;
    }

    p {
      letter-spacing: 0.3px;
      line-height: 25px;
      color: #437b4a;
    }
  }
}

.container-box-shop {
  display: flex;
  justify-content: center;
  gap: 10px;

  p {
    text-align: center;
  }

  #price {
    color: gray;
  }
  .slot-shop {
    text-align: center;
  }
  .box-shop {
    display: flex;
    background-color: #f9f5f2;
    height: 300px;
    width: 300px;
  }
}
.price-c {
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  bottom: 15px;
}
#before-price {
  font-size: 14px;
  text-decoration: line-through;
  text-align: center;
  position: relative;
  top: 3px;
}
</style>
