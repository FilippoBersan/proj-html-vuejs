<script>
export default {
  name: 'Bottom Header Component',
  data() {
    return {
      info: [
        {
          text: 'Home',
          chevron: '⌵',
        },
        {
          text: 'Shop',
          chevron: '⌵',
        },
        {
          text: 'About',
        },
        {
          text: 'Blog',
        },
        {
          text: 'Contact',
        },
        {
          text: 'Shop by brand',
          chevron: '⌵',
        },
      ],
    };
  },
  components: {},
};
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="info in info">
        <a href="#">{{ info.text }} {{ info.chevron }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        color: #696767;
        text-decoration: none;
      }

      a:hover {
        color: black;
      }
    }
  }
}
</style>
