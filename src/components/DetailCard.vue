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
    <h1>{{projectName}}</h1>
    <div id="info" class="info">
      <div class="item"><h3>Class Name</h3>
        <p>{{className}}</p></div>
      <div class="item"><h3>Project Date</h3>
        <p>{{projectDate}}</p></div>
      <div class="item"><h3>Project Description</h3>
        <p>{{projectDescription}}</p></div>
    </div>
  </div>
</template>

<style scoped>
#info {
  display: flex;
  flex-direction: column;
}

h1{
  font-size: 3vw;
  margin: 1vw;
}

p{
  font-size: 3vw;
  margin: 1vw;
  padding: 0 4vw;
}

h3{
  text-align: center;
  margin: 0;
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
  width: 80%;
  height: 50%;
  object-fit: cover;
  border-radius: 2vw;
  align-self: center;
  margin: auto;

}
</style>
