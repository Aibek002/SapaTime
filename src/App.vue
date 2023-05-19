<template>
<div class="body">
    
    <Header />
    <Title />
    <About />
    <Hotels />
    <Tours />
</div>

</template>


<script>
import Header from './components/Header.vue';
import Title from './components/Title.vue'
import About from './components/About.vue';
import Hotels from './components/Hotels.vue';
import Tours from './components/Tours.vue';
export default{
    components:{
        Header,Title,About,Hotels,Tours
    },

    data(){
        return{

        }
    }
}

</script>

<style>
</style>