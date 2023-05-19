<template>
    <div id="tours">
      <ul>
        <li v-for="tour in tours" :key="tour.id" @click="redirectToTour(tour.id)">
          {{ tour.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tours: [
          { id: 1, name: 'Тур 1' },
          { id: 2, name: 'Тур 2' },
          { id: 3, name: 'Тур 3' },
          // Добавьте ваши туры с их соответствующими ID и именами
        ],
      };
    },
    methods: {
      redirectToTour(tourId) {
        this.$router.push(`/${tourId}`);
      },
    },
  };
  </script>
  