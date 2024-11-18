<script setup>
import projectData from '../assets/MOCK_DATA.js'
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";


</script>

<template>
  <primary-template>
  <h1>Welcome to my site!</h1>

  <p v-for="(project, number) in projectData.data"  :key="number">
    Project: {{project}} <br/>
  </p>
  <section class="middle">
  </section>


  </primary-template>
</template>

<style scoped>
h1{
  text-align: center;
  font-size: 30pt;
}
img{

}

</style>