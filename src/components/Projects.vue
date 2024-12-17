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
          :project-img="project.projectImg"
          class="card"
      />
      <a href="ProjectDetails">Details</a>
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
a:hover{
  transform: scale(1.05);
  background-color: #00a1ff;
}
a{
  background-color: #001466;
  font-family: "Bely Display", cursive;
  display: inline-block;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 3vw;
  margin: 1vw auto;
  padding: 0.5rem 1rem;
  border-radius: 1vw;
}



</style>