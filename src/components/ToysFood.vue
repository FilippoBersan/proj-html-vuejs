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
  <!-- center part jumbotron -->
  <div class="big-cont">
    <div class="container-1">
      <h3>Find the best animal supplies</h3>
      <h1><em>Popular accessories</em></h1>
      <button class="button c-button">View all toys accessories</button>
    </div>
    <div class="container-2">
      <h3>Find the best food</h3>
      <h1><em>New food arrival</em></h1>
      <button class="button c-button">View all food products</button>
    </div>
  </div>

  <!-- center part jumbotron -->
  <!-- bottom part jumbotron -->
  <div class="container-border-bottom">
    <ul>
      <li>
        <font-awesome-icon icon="fa-solid fa-truck" />
        Free worldwide deliveries
      </li>
      <li>
        <font-awesome-icon icon="fa-regular fa-map" />
        Find stores near you
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-dollar-sign" />
        Best price guaranteed
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-credit-card" />
        All credit card accepted
      </li>
    </ul>
  </div>
  <!-- bottom part jumbotron -->
</template>

<style scoped lang="scss">
.container-border-bottom {
  padding: 50px;
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
      display: flex;
      flex-direction: column;
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

.big-cont {
  display: flex;
  .container-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-image: url('/public/banner-8-2x.jpg');
    filter: brightness(80%);
    background-size: cover;
    height: 500px;
  }

  h3 {
    color: white;
  }
  h1 {
    color: white;
  }

  .container-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    filter: brightness(80%);
    background-size: cover;
    height: 500px;
    background-image: url('/public/banner-9-2x.jpg');
  }
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

  .button:hover {
    background-color: #5b9367;
  }
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
</style>
