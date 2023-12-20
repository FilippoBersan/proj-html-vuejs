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
        <div class="box-title">
          <h1><em>Get the best tips & tricks</em></h1>
          <p>Recent articles</p>
        </div>
      </div>
    </div>
    <div class="container-box-shop">
      <div class="slot-shop">
        <div class="box-shop" id="hov-1">
          <img src="/public/blog-1-400x400.jpg" alt="" />
        </div>
        <p>How to 'loose leash walk' your dog</p>
        <p id="date">April 21st, 2020</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/blog-2-400x400.jpg" alt="" />
        </div>
        <p>Stop cats from scratching furniture</p>
        <p id="date">April 19th, 2020</p>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/blog-3-400x400.jpg" alt="" />
        </div>
        <p>Where to buy the best food</p>
        <div class="cont-price">
          <p id="date">April 18th, 2020</p>
        </div>
      </div>

      <div class="slot">
        <div class="box">
          <img src="/public/blog-4-400x400.jpg" alt="" />
        </div>
        <p>Proper care for your pet toys</p>
        <p id="date">April 17th, 2020</p>
      </div>
    </div>
    <div class="btn-cont">
      <button class="button c-button">Read all articles</button>
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

      img {
        display: flex;
        align-self: center;
        height: 300px;
        width: 300px;
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
  #date {
    color: #9c9c9c;
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

.box-title {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #418c2e;
    margin-top: 0;
  }
}
#hov-1:hover {
  filter: brightness(70%);
}

.btn-cont {
  display: flex;
  justify-content: center;
}

.button {
  display: flex;
  align-self: center;
  background-color: #406f46;
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
</style>
