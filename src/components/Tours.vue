<template>
    <div class="Tours">

        <div class="item1"><img class="imgs" src="../img/tour2.jpg" alt="">
            <p>от 599000 ₸<br>
                за одного взрослого</p><a href="/tours/1">ПОДРОБНЕЕ =></a>
            <button @click="toggleFavorite">
                {{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
            </button>
        </div>
        <div class="item2"><img class="imgs" src="../img/tour3.jpg" alt="">
            <p>от 599000 ₸<br>
                за одного взрослого</p><a href="/tours/2">ПОДРОБНЕЕ =></a><button @click="toggleFavorite">
                {{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
            </button>
        </div>
        <div class="items"><img class="imgs" src="../img/tour1.jpg" alt="">
            <p>от 599000 ₸<br>
                за одного взрослого</p><a href="/tours/3">ПОДРОБНЕЕ =></a><button @click="toggleFavorite">
                {{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
            </button>
        </div>
    </div>
    <div class="Tours">
        <div class="item3"><img class="imgs" src="../img/tour4.jpg" alt="">
            <p>от 599000 ₸<br>
                за одного взрослого</p><a href="/tours/4">ПОДРОБНЕЕ =></a><button @click="toggleFavorite">
                {{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
            </button>
        </div>
        <div class="item4"><img class="imgs" src="../img/tour5.jpg" alt="">
            <p>от 599000 ₸<br>
                за одного взрослого</p><a href="/tours/5">ПОДРОБНЕЕ =></a><button @click="toggleFavorite">
                {{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
            </button>
        </div>
        <div class="item4"><img class="imgs" src="../img/tour5.jpg" alt="">
            <p>от 599000 ₸<br>
                за одного взрослого</p><a href="/tours/5">ПОДРОБНЕЕ =></a><button @click="toggleFavorite">
                {{ isFavorite ? 'Удалить из избранного' : 'Добавить в избранное' }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
  
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  mounted() {
    this.isFavorite = this.isTourFavorite();
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        this.addToFavorites();
      } else {
        this.removeFromFavorites();
      }
    },
    isTourFavorite() {
      const favoriteTours = JSON.parse(localStorage.getItem('favoriteTours')) || [];
      return favoriteTours.includes(this.tour.id);
    },
    addToFavorites() {
      const favoriteTours = JSON.parse(localStorage.getItem('favoriteTours')) || [];
      favoriteTours.push(this.tour.id);
      localStorage.setItem('favoriteTours', JSON.stringify(favoriteTours));
    },
    removeFromFavorites() {
      const favoriteTours = JSON.parse(localStorage.getItem('favoriteTours')) || [];
      const index = favoriteTours.indexOf(this.tour.id);
      if (index !== -1) {
        favoriteTours.splice(index, 1);
        localStorage.setItem('favoriteTours', JSON.stringify(favoriteTours));
      }
    },
  },
};

</script>

<style scoped>
.Tours {
    display: flex;
    flex-direction: row;
}

.imgs {
    width: 100%;
    height: 50%;
}

p {
    font-weight: 800;
    margin-left: 30px;
}

.items,
.item1,
.item2,
.item3,
.item4 {
    width: 400px;
    height: 400px;
    margin-top: 2%;
    margin-left: 4%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
    color: rgb(0, 60, 60);
    font-weight: 700;
    padding: 10%;
}

button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

a:hover {
    text-decoration: none;
    color: rgb(28, 113, 113);
    font-weight: 700;
    font-size: 18px;
}</style>