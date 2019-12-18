<template>
  <div class="jobs container-fluid">
    <header class="row">
      <div class="col">
        <h1>Jobs</h1>
      </div>
    </header>
    <main class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="createJob">
              <input required type="text" v-model="newJob.title" placeholder="Job Title" />
              <input type="text" v-model="newJob.imgUrl" placeholder="Image Url" />
              <input
                required
                type="description"
                v-model="newJob.description"
                placeholder="Description"
              />
              <button class="btn btn-success" type="submit">Add Job Listing</button>
            </form>
          </div>
          <div class="col-12">
            <div class="row jobs">
              <div class="col-3" v-for="job in jobs" :key="job.id">
                <job-component :jobData="job" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import jobComponent from "@/components/Job";
export default {
  name: "jobs",
  mounted() {
    this.$store.dispatch("getJobs");
  },
  data() {
    return {
      newJob: {
        title: "",
        imgUrl: "",
        description: ""
      }
    };
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  methods: {
    createJob() {
      let job = { ...this.newJob };
      this.$store.dispatch("createJob", job);
      this.newJob = {
        title: "",
        imgUrl: "",
        description: ""
      };
    }
  },
  components: {
    jobComponent
  }
};
</script>

<style></style>
