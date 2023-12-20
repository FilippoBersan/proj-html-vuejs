<script>
import BrosweCategory from './BrosweCategory.vue';
import TypeFood from './TypeFood.vue';
import NewArrivals from './NewArrivals.vue';
import BestSellers from './BestSellers.vue';
import UserTestimonials from './UserTestimonials.vue';
export default {
  data() {
    return {};
  },
  components: {
    BrosweCategory,
    TypeFood,
    NewArrivals,
    BestSellers,
    UserTestimonials,
  },
};
</script>

<template>
  <BrosweCategory></BrosweCategory>
  <TypeFood></TypeFood>
  <NewArrivals></NewArrivals>
  <BestSellers></BestSellers>
  <UserTestimonials></UserTestimonials>
</template>

<style scoped lang="scss"></style>
