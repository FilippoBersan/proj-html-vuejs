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
          <div class="text">
            <h1><em>Join our newsletter</em></h1>
            <p>
              <em
                >Voluptat vel turpis nulla lorem sad semper. Aliquiam saggittis
                sem libero viverra vehicula nullam ut nisi.</em
              >
            </p>
            <div class="email">
              <input
                type="search"
                class="search-input"
                placeholder="Insert your email ...*"
              />
              <button class="button c-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.boxes {
  padding: 100px;
  margin-top: -170px;

  .container-box {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    .slot {
      text-align: center;
    }
    .box {
      display: flex;
      align-items: start;
      flex-direction: column;
      background-color: #1e3020;
      height: 530px;
      width: 1130px;
      background-repeat: no-repeat;
      background-image: url('/public/banner-7-2x-scaled.jpg');

      background-size: cover;
      box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
        1px 3px 8px rgba(39, 44, 49, 0.03);
      transition: all 0.5s ease; /* back to normal */

      .text {
        padding-top: 100px;
        width: 55%;
      }

      h1 {
        font-size: 42px;
        color: rgb(0, 0, 0);
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

      .email {
        display: flex;
        justify-content: space-around;
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
