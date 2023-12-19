<script>
import HeaderPet from './components/HeaderPet.vue';
import BottomHeader from './components/BottomHeader.vue';
import JumbotronPet from './components/JumbotronPet.vue';
import MainPet from './components/MainPet.vue';

export default {
  data() {
    return {};
  },
  components: {
    HeaderPet,
    BottomHeader,
    JumbotronPet,
    MainPet,
  },
};
</script>

<template>
  <HeaderPet></HeaderPet>
  <BottomHeader></BottomHeader>
  <JumbotronPet></JumbotronPet>
  <MainPet></MainPet>
</template>

<style scoped></style>
