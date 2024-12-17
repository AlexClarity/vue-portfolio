<script setup>
import projectData from '../assets/MOCK_DATA.js'
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import DetailCard from "../components/DetailCard.vue";
</script>

<template>
<primary-template>
  <div class="middle">
    <h1>Details</h1>

    <DetailCard
        v-for="(project, index) in projectData.data"
        :key="index"
        :project-name="project.projectName"
        :project-date="project.projectDate"
        :class-name="project.className"
        :project-description="project.projectDescription"
        :project-img="project.projectImg"
        class="card"
    />

  </div>

</primary-template>
</template>

<style scoped>

.middle{
  background-color: #30317e;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1{
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 5vw;

  }
}

.card{
  width: 100%;
}



</style>