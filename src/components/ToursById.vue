<template>
  <div>
    <h1>{{ tourName }}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tours: [
        { id: 1, name: 'Aibek' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Jane' },
        { id: 4, name: 'Aibek' },
        { id: 5, name: 'John' },
        { id: 6, name: 'Jane' },
      ],
    };
  },
  computed: {
    tourName() {
      const tourId = parseInt(this.$route.params.id); 
      const tour = this.tours.find((tour) => tour.id === tourId); 
      return tour ? tour.name : 'Tour not found'; 
    },
  },
};
</script>
