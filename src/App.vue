<script>
import HeaderPet from './components/HeaderPet.vue';
import BottomHeader from './components/BottomHeader.vue';
import JumbotronPet from './components/JumbotronPet.vue';
import MainPet from './components/MainPet.vue';
import FooterPet from './components/FooterPet.vue';
import FooterBottom from './components/FooterBottom.vue';

export default {
  data() {
    return {};
  },
  components: {
    HeaderPet,
    BottomHeader,
    JumbotronPet,
    MainPet,
    FooterPet,
    FooterBottom,
  },
};
</script>

<template>
  <HeaderPet></HeaderPet>
  <BottomHeader></BottomHeader>
  <JumbotronPet></JumbotronPet>
  <MainPet></MainPet>
  <FooterPet></FooterPet>
  <FooterBottom></FooterBottom>
</template>

<style scoped></style>
