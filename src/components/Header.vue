<template>
    <header>
        <div class="item"><img src="../img/logotype.png" alt="logo"></div>
        <div class="item"></div>
        <div class="item"> <a href="#Home">Главная</a> </div>
        <div class="item"><a href="#about">О нас</a> </div>
        <div class="item"><a href="#tours">Туры</a> </div>
        <div class="item"><a href="#hotels" >Hotels</a> </div>
        <hr>

    </header>
</template>

<script>
import Title from './Title.vue'
import Hotels from './Hotels.vue';
export default {
    components: {
        Title, Hotels
    },
    data() {
        return {
          
        }
    }
}
</script>

<style>
header {
    display: grid;
    grid-template-columns: 20% 30% 10% 10% 10% 10%;
    grid-template-areas: 'item item item . . .';
    background: rgba(255, 255, 255, 0.836);
    background-repeat: no-repeat;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 80px;
    margin-top: -6px;
}

.item img {
    width: 330px;
    height: 60px;
    padding-left: 50px;
    padding-top: 10px;

}

.item a {
    text-align: center;
    text-decoration: none;
    color: rgb(0, 203, 207);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 5;
    font-weight: 500;

}
</style>