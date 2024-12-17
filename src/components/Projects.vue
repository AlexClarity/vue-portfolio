<script setup>
import projectData from '../assets/MOCK_DATA.js'
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <primary-template>
    <div class="middle">
    <h1>My Work</h1>


      <card
          v-for="(project, index) in projectData.data"
          :key="index"
          :project-name="project.projectName"
          :project-date="project.projectDate"
          :class-name="project.className"
          :project-description="project.projectDescription"
          :project-img="project.projectImg"
      />

    </div>


  </primary-template>
</template>

<style scoped>

.middle{
  background-color: #30317e;
  padding-top: 1rem;
  h1{
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 4rem;

  }
}

card{
  width: 100%;
}




</style>