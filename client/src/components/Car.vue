<template>
  <div class="car" :class="{ greyscale: carData.sold }">
    <router-link :to="{ name: 'carDetails', params: { id: carData.id } }">
      <img :src="carData.imgUrl" alt="" />
      <p>{{ carMakeUpperCase }} | {{ carData.model }}</p>
    </router-link>
    <button @click="sold">SOLD</button>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: ["carData"], //NOTE props come from parents
  computed: {
    carMakeUpperCase() {
      return this.carData.make.toUpperCase();
    }
  },
  methods: {
    sold() {
      this.$store.dispatch("sold", this.carData.id);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.greyscale {
  filter: grayscale(1);
}
</style>
