<script>
export default {
  props: [
      'projectName',
      'projectDate',
      'className',
      'projectDescription',
      'projectImg'
  ]
};

</script>

<template>
   <div class="card">
     <img :src="'../../src/assets/' + projectImg" alt="img" />
      <h3>{{projectName}}</h3>
     <div id="info" class="info">
       <div class="item"><h3>Project Date</h3>
         <p>{{projectDate}}</p></div>
       <div class="item"><h3>Class Name</h3>
         <p>{{className}}</p></div>
       <div class="item"><h3>Project Description</h3>
         <p>{{projectDescription}}</p></div>
     </div>
   </div>
</template>

<style scoped>
#info {
  display: none;
}

div{
  text-align: center;
}
.card {
  display:flex;
  flex-direction: column;
  justify-content: center;
  color: white;

}
.card img {
  width: 80%; /* Fill the width of the container */
  height: 300px; /* Set a specific height */
  object-fit: cover; /* Crop image while maintaining aspect ratio */
  border-radius: 8px; /* Optional: round edges */
  align-self: center;
  margin: auto;

}
</style>
