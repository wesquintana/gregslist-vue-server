<template>
  <div class="job" :class="{greyscale: jobData.sold}">
    <router-link :to="{name:'jobDetails', params: {id:jobData.id}}">
      <img :src="jobData.imgUrl" />
      <p>{{ jobData.title }} | {{ jobData.description }}</p>
    </router-link>
    <button @click="soldJob">SOLD</button>
  </div>
</template>
<script>
export default {
  name: "Job",
  props: ["jobData"],
  data() {
    return {};
  },
  methods: {
    soldJob() {
      this.$store.dispatch("soldJob", this.jobData.id);
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