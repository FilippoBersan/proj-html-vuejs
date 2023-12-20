<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="boxes">
    <div class="container-box">
      <div class="slot">
        <div class="box">
          <p>All-time best sellers</p>
          <div class="cont-btn">
            <button class="button c-button">Learn more about us</button>
          </div>
          <h1><em>Items everyone loves</em></h1>
        </div>
      </div>
    </div>
    <div class="container-box-shop">
      <div class="slot-shop">
        <div class="box-shop">
          <img src="/public/product-21-400x400.jpg" alt="" />
        </div>
        <p>Transport cage</p>
        <p id="price">$25.00</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-20-400x400.jpg" alt="" />
        </div>
        <p>Dog leash</p>
        <p id="price">$25.00</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-16-400x400.jpg" alt="" />
        </div>
        <p>Animal transport cage</p>
        <div class="cont-price">
          <p id="before-price">$35.00</p>
          <p id="price">$25.00</p>
        </div>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/product-11-400x400.jpg" alt="" />
        </div>
        <p>Colorful cat leash</p>
        <p id="price">$12.00</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.boxes {
  padding: 100px;
  margin-top: -100px;

  .container-box {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    .slot {
    }
    .box {
      display: flex;
      flex-direction: column;
      height: 120px;
      width: 1230px;
      background-size: cover;

      .cont-btn {
        display: flex;
        justify-content: end;
      }

      h3 {
        color: rgb(255, 255, 255);
      }

      h1 {
        font-size: 32px;
        color: rgb(45, 45, 45);
        margin: 0;
      }

      p {
        margin: 0;
        font-size: 30px;
        color: #418c2e;
      }

      img {
        display: flex;
        align-self: center;
        height: 300px;
        width: 300px;
      }

      .button {
        display: flex;
        align-self: center;

        background-color: #29422c;
        border: none;
        color: rgb(255, 255, 255);
        padding: 10px;
        text-align: center;
        display: inline-block;
        font-size: 13px;
        letter-spacing: 2px;
        margin: 4px 2px;
        width: 200px;
        cursor: pointer;
      }
      .c-button {
        border-radius: 50px;
      }
    }
  }
}

.container-box-shop {
  display: flex;
  justify-content: center;
  gap: 10px;

  .box {
    height: 300px;
    width: 300px;

    img {
      height: 300px;
    }
  }

  p {
    text-align: center;
    font-size: 18px;
  }
  #price {
    color: #38733f;
  }

  #before-price {
    display: flex;
    align-self: center;
    font-size: 15px;
    text-decoration: line-through;
  }

  .box-shop {
    display: flex;
    background-color: #f9f5f2;
    height: 300px;
    width: 300px;
  }

  .cont-price {
    display: flex;
    justify-content: center;
    gap: 15px;
    position: relative;
    bottom: 20px;
  }
}
</style>
