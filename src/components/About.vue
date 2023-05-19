<template>
    <div id="about">
        <div class="item">
            <img src="../img/особенности.jpg" alt="">
            <div class="textAbout">
                <h4>Особенности SaparTime<hr class="abHr"></h4>
                <h4>
                    Откройте дверь в мир приключений с SaparTime <h5>- вашим проводником в незабываемые путешествия!</h5>
                </h4>
                <p><span>SaparTime</span> - ваш путеводитель в мир приключений.</p>
                <ul>
                    <h6>5 причин выбрать нас и воплотит свои мечты в реальность!<br>
                        </h6>
                    <li>Уникальные туры по всему миру.</li>
                    <li>Индивидуальный подход к каждому клиенту.</li>
                    <li>Надежность и безопасность во время путешествий.</li>
                    <li>Профессиональные гиды с глубокими знаниями.</li>
                    <li>Высокое качество обслуживания и поддержка во время путешествия.</li>
                </ul>
            </div>
        </div>
        <div class="item">

            <div class="textAbout">
                <h4>
                    Преимущество SaparTime: <hr class="abHr2">
                </h4>
                <p>
                    Неповторимые туры по всему миру с индивидуальным подходом, высочайшим качеством обслуживания и
                    безупречной организацией. У нас опытные гиды, рассказывающие удивительные истории, и мы всегда готовы
                    оказать надежную поддержку во время вашего путешествия. SaparTime - ваш ключ к незабываемым
                    приключениям.</p>
                <ul> 
                    <h6>Чем мы отличаемся от других турагентств?</h6>
                    <li>Персонализированный сервис</li>
                    <li>Высокое качество</li>
                    <li>Надежность и безопасность во время путешествий.</li>
                    <li> гибкие условия бронирования и профессиональная экспертиза.</li>
                </ul>
            </div>
            <img src="../img/преимущества.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#about {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
}

.item {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.502);
    border-radius: 10px;
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    margin-top: 2%;
}

.textAbout {
    padding-left: 10%;
}

.item img {
    width: 40%;
    height: 100%;
    border-radius: 10px;
    padding: 0%;
}

h5 {
    margin: 0%;
    padding-left: 5%;
}

h4 {
    margin-bottom: 0%;
}

h6 {
    margin: 0%;
}

span {
    font-weight: 500;
}

p {
    width: 80%;
    padding-left: 5%;
}

li {
    font-size: 10px;
    width: 80%;
    line-height: 1.5;
}
.abHr{
    background-color: rgb(0, 147, 98);
    width: 100%;
    height: 5px;
    border: none; /* Убираем стандартные границы */
    margin-left: 0;
    margin-top: 10px;
}
.abHr2{
    background-color: rgb(0, 147, 98);
    width: 80%;
    height: 5px;
    border: none; /* Убираем стандартные границы */
    margin-left: 0;
    margin-top: 10px;
}

</style>