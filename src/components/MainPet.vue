<script>
import BrosweCategory from './BrosweCategory.vue';
import TypeFood from './TypeFood.vue';
import NewArrivals from './NewArrivals.vue';
import BestSellers from './BestSellers.vue';
import UserTestimonials from './UserTestimonials.vue';
import NewsLetter from './NewsLetter.vue';
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
    NewsLetter,
  },
};
</script>

<template>
  <BrosweCategory></BrosweCategory>
  <TypeFood></TypeFood>
  <NewArrivals></NewArrivals>
  <BestSellers></BestSellers>
  <UserTestimonials></UserTestimonials>
  <NewsLetter></NewsLetter>
</template>

<style scoped lang="scss"></style>
