<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col">
        <h1>C<img alt="Vue logo" src="../assets/logo.png" />rs</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createCar">
          <input
            required
            type="text"
            v-model="newCar.make"
            placeholder="Make"
          />
          <input
            required
            type="text"
            v-model="newCar.model"
            placeholder="model"
          />
          <input
            required
            type="number"
            v-model="newCar.price"
            placeholder="price"
          />
          <input
            required
            type="number"
            v-model="newCar.year"
            placeholder="year"
          />
          <input
            required
            type="text"
            v-model="newCar.imgUrl"
            placeholder="imgUrl"
          />
          <input
            required
            type="text"
            v-model="newCar.description"
            placeholder="description"
          />
          <button class="btn btn-success" type="submit">Add Car</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row cars">
          <div class="col-4" v-for="car in cars" :key="car.id">
            <!-- Props are data passed from parent to child with :propName="DATA" -->
            <car-component :carData="car" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CarComponent from "@/components/Car";
export default {
  name: "home",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getCars");
  },
  data() {
    return {
      newCar: {
        make: "",
        model: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      }
    };
  },
  methods: {
    createCar() {
      let car = { ...this.newCar }; //NOTE makes a copy of the car data object
      this.$store.dispatch("createCar", car);
      this.newCar = {
        make: "",
        model: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      };
    }
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    },
    unsoldCars() {
      this.cars.filter(c => !car.sold);
    }
  },
  components: {
    CarComponent
  }
};
</script>
<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
</style>
