<template>
  <h1>Наши партнеры и Отели</h1>
  <div id="hotels">
    <div class="item"></div>
    <div class="item1"></div>
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
    <div class="item5"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#hotels {
  display: flex;
  flex-direction: row;
}
h1 {
  text-align: center;
}
@keyframes changeBackground {
  0% {
    background-image: url("../img/hotel1.jpeg");
  }

  66% {
    background-image: url("../img/hotel2.jpeg");
  }

  100% {
    background-image: url("../img/hotel3.jpeg");
  }
}

.item img {
  width: 300px;
  height: 300px;
}

.item,
.item1,
.item2,
.item3 {
  width: 300px;
  height: 300px;
  margin-top: 2%;
  margin-left: 2%;
  animation: changeBackground 5s infinite;
  background-repeat: repeat;
  background-size: 100% 100%;
}
</style>
