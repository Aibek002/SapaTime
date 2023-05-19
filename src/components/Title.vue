<template>
    <div class="title">
    <p class="titleTurism">Откройте мир с нами: уникальные туры по всему миру</p>
    <p class="textTurism">Осуществите свои мечты о путешествиях с нашим Турагентством Sapartime!</p>
    <hr>
    </div>
</template>
<script>
setInterval(function() {
  var element = document.querySelector('.title');
  element.style.animation = 'none';
  void element.offsetWidth;
  element.style.animation = null;
}, 10000);

export default {

}
</script>

<style scoped>
.title {
  
    background-color: rgba(0, 0, 0, 0.5);

    background-blend-mode: multiply;

    background-size: cover;
    animation: changeBackground 10s infinite;
    background-repeat: repeat;
    background-size: 100% 100%;
    height: 60vh;
    text-align: center;
}
 .titleTurism{
    padding-top: 10%;
    color: aliceblue;
    font-size: 35px;
    margin: 0px;
    letter-spacing: 0.1em;
    font-weight: 800;
    font-family: 'Times New Roman', Times, serif;
}
.textTurism{
    padding-top: 4%;
    color: aliceblue;
    font-size: 15px;
    margin: 0px;
    letter-spacing: 0.1em;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
}
hr{
    color: aliceblue;
    height: 1px;
    width: 20%;
    margin-top: 5%;
}

@keyframes changeBackground {
  0% {
    background-image: url("https://kartinkin.net/uploads/posts/2022-08/thumbs/1659458798_25-kartinkin-net-p-puteshestvennik-kartinki-krasivo-30.jpg");
  }
  66% {
    background-image: url("https://live.staticflickr.com/8692/29469829440_4481cea5e2_b.jpg");
  }
  100% {
    background-image: url('https://img1.akspic.ru/crops/2/8/4/7482/7482-otpusk-rechnoj_kruiz-pejzazhi-priroda-kruiznoe_sudno-1920x1080.jpg');
  } 
 } 
</style>