<template>
  <div class="job-details container-fluid">
    <header class="row">
      <div class="col-12">
        <router-link :to="{ name: 'jobs' }">
          <h1>Jobs</h1>
        </router-link>
      </div>
    </header>
    <main class="row">
      <div class="col-12">
        <img :src="job.imgUrl" />
        <h2>{{ job.title }} | {{ job.description }}</h2>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  mounted() {
    this.$store.dispatch("getJobById", this.$route.params.id);
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  }
};
</script>

<style></style>
