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
          <h1><em>Kibble</em></h1>
          <p>Dry dog food</p>
          <img src="/public/food-transparent-18-200x210.png" alt="" />
          <button class="button c-button">Shop dry food</button>
        </div>
      </div>

      <div class="slot">
        <div class="box">
          <h1><em>Moist</em></h1>
          <p>Canned dog food</p>
          <img src="/public/food-transparent-17-200x210.png" alt="" />
          <button class="button c-button">Shop moist food</button>
        </div>
      </div>

      <div class="slot">
        <div class="box">
          <h1><em>Frozen</em></h1>
          <p>Freeze-Dried dog food</p>
          <img src="/public/food-transparent-16-200x210.png" alt="" />
          <button class="button c-button">Shop frozen food</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.boxes {
  padding: 100px;
  margin-top: -50px;

  .container-box {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    .slot {
      text-align: center;
    }
    .box {
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: #1e3020;
      height: 600px;
      width: 400px;
      background-image: url('/public/bg-transparent-3.png');
      box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
        1px 3px 8px rgba(39, 44, 49, 0.03);
      transition: all 0.5s ease; /* back to normal */

      h1 {
        color: rgb(255, 255, 255);
      }

      p {
        font-size: 20px;
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

        background-color: #5b9367;
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

  // effect box
  .box:hover {
    transform: translate3D(0, -1px, 0) scale(1.03);
    box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
      1px 6px 12px rgba(39, 44, 49, 0.04);
    transition: all 0.4s ease; /* zoom in */
  }
}
</style>
