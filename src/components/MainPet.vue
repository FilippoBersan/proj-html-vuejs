<script>
import BrosweCategory from './BrosweCategory.vue';
import TypeFood from './TypeFood.vue';
import NewArrivals from './NewArrivals.vue';
import BestSellers from './BestSellers.vue';
import UserTestimonials from './UserTestimonials.vue';
import NewsLetter from './NewsLetter.vue';
import TipsTricks from './TipsTricks.vue';
import ToysFood from './ToysFood.vue';
import NewProduct from './NewProduct.vue';
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
    TipsTricks,
    ToysFood,
    NewProduct,
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
  <TipsTricks></TipsTricks>
  <ToysFood></ToysFood>
  <NewProduct></NewProduct>
</template>

<style scoped lang="scss"></style>
