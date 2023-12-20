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
    <div class="cont-title">
      <h1><em>Users testimonials</em></h1>
    </div>
    <div class="container-user">
      <div class="user">
        <div class="img-cont" id="avatar-1"></div>
        <p>
          Auctor est habitasse amet nunc,interdum vel mattis sodales cras. Ut
          nulla quis nunc, tincidunt eu. Eu.
        </p>
        <p id="info">Lisa Smith, ThemeFusion</p>
      </div>

      <div class="user">
        <div class="img-cont" id="avatar-2"></div>
        <p>
          Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget
          felis porttitor volutpat vestibulum ac diam sit.
        </p>
        <p id="info">Melissa Green, ThemeFusion</p>
      </div>

      <div class="user">
        <div class="img-cont" id="avatar-3"></div>
        <p>
          Cuarabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Proin eget tortor risus vestibulum ante ipsum.
        </p>
        <p id="info">Sam Lewis, ThemeFusion</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: white;
  position: relative;
  top: 100px;
  font-size: 40px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e3020;
  background-image: url('/public/bg-transparent-3.png');
  height: 600px;
  .container-user {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 100px;
  }

  .user {
    display: flex;
    flex-direction: column;
    padding: 50px;

    p {
      color: white;
      letter-spacing: 0.3px;
      line-height: 23px;
    }

    #info {
      color: gray;
    }

    .img-cont {
      position: relative;
      left: 105px;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background-color: aqua;

      background-size: contain;
    }
    #avatar-1 {
      background-image: url('/public/avatar-3-200x200.jpg');
    }

    #avatar-2 {
      background-image: url('/public/avatar-1-200x200.jpg');
    }

    #avatar-3 {
      background-image: url('/public/avatar-4-200x200.jpg');
    }
  }
}
</style>
