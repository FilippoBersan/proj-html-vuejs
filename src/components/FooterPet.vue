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
    <div class="container-box"></div>
    <div class="container-box-shop">
      <div class="slot-shop">
        <div class="box-shop">
          <img src="/public/mobile-light-pet-logo-2x-200x52.png" alt="" />
          <ul class="ul-box">
            <li>1234 Avada Avenue Avadaville</li>
            <li>info@your-company.com</li>
            <li>Call us: (1) 234 5678</li>
          </ul>
        </div>
      </div>

      <div class="slot">
        <h2>Shop by brand</h2>
        <ul class="ul-box">
          <li>Bed</li>
          <li>Food</li>
          <li>Toys</li>
          <li>Transport</li>
        </ul>
      </div>

      <div class="slot">
        <h2>Useful links</h2>
        <ul class="ul-box">
          <li>My account</li>
          <li>Orders</li>
          <li>Checkout</li>
          <li>Cart</li>
        </ul>
      </div>

      <div class="slot" id="news-letter">
        <h2>Subscribe to our Newsletter</h2>
        <input
          type="search"
          class="search-input"
          placeholder="Insert your email ...*"
        />
        <button class="button c-button">Subscribe</button>
      </div>
    </div>
    <div class="info-social">
      <p>Home</p>
      <p>About</p>
      <p>Blog</p>
      <p>Contact</p>
      <p>Shop</p>
    </div>
    <div class="cont-social">
      <font-awesome-icon icon="fa-brands fa-facebook" />
      <font-awesome-icon icon="fa-brands fa-twitter" />
      <font-awesome-icon icon="fa-brands fa-instagram" />
      <font-awesome-icon icon="fa-brands fa-youtube" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-social {
  display: flex;
  justify-content: center;
  gap: 30px;
  color: white;
}
.cont-social {
  display: flex;
  justify-content: center;
  gap: 30px;
  color: white;
}

h2 {
  color: white;
}
.ul-box {
  position: relative;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
li {
  color: rgb(255, 255, 255);
  list-style: none;
}

.boxes {
  padding: 100px;

  background-color: #1e3120;

  .container-box {
    display: flex;
    justify-content: space-around;
    gap: 10px;

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
    justify-content: start;
    flex-direction: column;
    background-color: #1e3120;
    height: 300px;
    width: 300px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    img {
      width: 80%;
      height: 20%;
    }

    li {
      color: white;
      list-style: none;
    }
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

.slot {
  width: 300px;
  height: 300px;
}
#news-letter {
  background-color: #37623d;
  background-image: url('/public/bg-transparent-3.png');
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    text-align: center;
  }
}

.search-input {
  padding: 10px;
  width: 300px;
  border-radius: 20px;
  background-color: #f4f4f3;
  border: none;
}

.button {
  display: flex;
  align-self: center;
  background-color: #4ea159;
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

.container-box-shop {
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
}
</style>
