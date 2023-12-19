<script>
export default {
  name: 'Header Component',
  data() {
    return {
      info: [
        {
          img: './public/dark-pet-logo.png',
        },
      ],
    };
  },
  components: {},
};
</script>

<template>
  <div class="container">
    <img v-for="info in info" :src="info.img" alt="" />
    <div class="search">
      <form>
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="search-icon"
        />
        <input type="search" class="search-input" placeholder="Search..." />
      </form>
    </div>
    <div class="questions">
      <strong>Questions?</strong>
      <p>Call us : 1.800.123.4567</p>
    </div>
    <div class="icons">
      <font-awesome-icon icon="fa-solid fa-box-archive" />
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  height: 40px;
  border-bottom: 1px solid;
  border-color: #ececec;
  padding: 15px;
  .search {
    display: flex;
    align-items: center;

    input::placeholder {
      position: relative;
      left: 30px;
    }
    .search-icon {
      position: relative;
      left: 30px;
    }
  }

  .search-input {
    padding: 10px;
    width: 300px;
    border-radius: 20px;
    background-color: #f4f4f3;
    border: none;
  }

  .questions {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      color: #7e7e7e;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
