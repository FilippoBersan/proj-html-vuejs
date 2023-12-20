<script>
import BrosweCategory from './BrosweCategory.vue';
import TypeFood from './TypeFood.vue';
import NewArrivals from './NewArrivals.vue';
import BestSellers from './BestSellers.vue';
export default {
  data() {
    return {};
  },
  components: {
    BrosweCategory,
    TypeFood,
    NewArrivals,
    BestSellers,
  },
};
</script>

<template>
  <BrosweCategory></BrosweCategory>
  <TypeFood></TypeFood>
  <NewArrivals></NewArrivals>
  <BestSellers></BestSellers>
</template>

<style scoped lang="scss"></style>
