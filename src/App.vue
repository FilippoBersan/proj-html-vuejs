<script>
import HeaderPet from './components/HeaderPet.vue';
import BottomHeader from './components/BottomHeader.vue';
import JumbotronPet from './components/JumbotronPet.vue';

export default {
  data() {
    return {};
  },
  components: {
    HeaderPet,
    BottomHeader,
    JumbotronPet,
  },
};
</script>

<template>
  <HeaderPet></HeaderPet>
  <BottomHeader></BottomHeader>
  <JumbotronPet></JumbotronPet>
</template>

<style scoped></style>
