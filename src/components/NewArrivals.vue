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
          <h3>Find the best animal supplies</h3>
          <h1><em>New arrivals weekly</em></h1>
          <button class="button c-button">Learn more about us</button>
        </div>
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
      text-align: center;
    }
    .box {
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: #1e3020;
      height: 600px;
      width: 1230px;
      background-image: url('/public/banner-3-2x-scaled.jpg');
      filter: brightness(80%);

      background-size: cover;
      box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
        1px 3px 8px rgba(39, 44, 49, 0.03);
      transition: all 0.5s ease; /* back to normal */

      h3 {
        color: rgb(255, 255, 255);
      }

      h1 {
        font-size: 52px;
        color: white;
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

        background-color: #ffffff;
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
