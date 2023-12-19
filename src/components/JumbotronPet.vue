<script>
export default {
  name: 'Jumbotron Component',
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <!-- top part jumbotron -->
  <div class="container-border">
    <ul>
      <li>
        <font-awesome-icon icon="fa-regular fa-map" />
        <strong> International</strong>
        <span> Shipping Services</span>
      </li>
      <li>
        <font-awesome-icon icon="fa-regular fa-clock" />
        <span>See our</span>
        <strong> store hours</strong>
        <span> and services</span>
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-check" />
        <span> We price match to give you the</span>
        <strong> best deals</strong>
      </li>
    </ul>
  </div>
  <!-- top part jumbotron -->
  <!-- center part jumbotron -->
  <div class="container">
    <div class="cont-text">
      <h5>Find the best animal supplies</h5>
      <p>
        We know animals are a part of your family, let us help take care of
        them.
      </p>
      <button class="button c-button">Learn more about us</button>
    </div>
  </div>
  <!-- center part jumbotron -->
  <!-- bottom part jumbotron -->
  <div class="container-border-bottom">
    <div class="image-food"></div>
    <ul>
      <li>
        <p>Get $25 OFF your first purchase of our homemade pet food!</p>
      </li>
      <li>
        <a href="#">Visit the shop</a>
      </li>
    </ul>
  </div>
  <!-- bottom part jumbotron -->
</template>

<style scoped lang="scss">
.container-border {
  display: flex;
  justify-content: center;
  background-color: #1e3120;
  background-image: url('/public/bg-transparent-3.png');

  ul {
    display: flex;
    gap: 100px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
    }
  }
}

.container-border-bottom {
  display: flex;
  justify-content: center;

  background-color: #1e3120;
  background-image: url('/public/bg-transparent-3.png');

  .image-food {
    position: relative;
    left: 100px;
    display: flex;
    background-image: url('/public/food-transparent-5.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 25%;
    height: 100px;
  }

  ul {
    display: flex;
    gap: 40px;
    list-style: none;

    li {
      position: relative;
      right: 100px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      font-size: 20px;

      a {
        color: #d4d4d4;
      }
    }
  }
}

.container {
  display: flex;
  align-items: end;

  background-image: url('/public/banner-5-2x-scaled.jpg');
  filter: brightness(90%);

  background-size: cover;
  height: 500px;
}

.cont-text {
  display: flex;
  flex-direction: column;
  color: white;
  padding-bottom: 40px;
  width: 50%;
  padding-left: 100px;

  h5 {
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    top: 80px;
  }

  p {
    font-size: 65px;
  }

  .button {
    display: flex;
    background-color: #ffffff; /* Green */
    border: none;
    color: rgb(0, 0, 0);
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

  .button:hover {
    background-color: #5b9367;
  }
}
</style>
