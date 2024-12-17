<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

</script>

<template>
  <primary-template>

    <section class="container">
      <img src="../assets/cdeslogo.png" alt="logo" />
    </section>
  <section class="middle">
    <div class="image-container">
      <h1>Dream • Explore • Plan • Create</h1>
    </div>
  </section>


  </primary-template>
</template>

<style scoped>

h1 {
  color: white;
  text-align: center;
  font-size: 6.5vw;
  margin:0;
}
.container{
  margin:0;
  background-color: #30317e;
  img{
    width: 100%;
    height: 100%;
  }
}
.middle {
  padding:1vw 0;
  background-color: #00a1ff;

}

/* Mobile */
@media screen and (max-width: 500px){
  .container{
    min-height:50vh;
    display:flex;
    justify-content: center;
    align-items: center;
  }
}
/* Tablet */
@media screen and (min-width: 501px) and (max-width: 1024px) {

}

</style>