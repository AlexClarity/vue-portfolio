<script setup>

import ACLogo from "../assets/ACLogo.png";
</script>

<template>
  <section class="primary-template">
    <header class="sticky-header">
      <div class="logo-container">
        <img :src="ACLogo">
        <p>Alex Clarity</p>
      </div>
      <div class="top-links">
        <a href="Home">Home</a>
        <a href="About">About Me</a>
        <a href="Contact">Contact</a>
        <a href="Projects">Projects</a>
      </div>
    </header>

    <section class="main">
      <slot />
    </section>

    <footer>
      <img :src="ACLogo">
    </footer>
  </section>
</template>

<style scoped>
a{
  text-decoration: none;
  color: inherit;
  font-size: 1.5vw;
  padding: 10px;
  white-space: nowrap;
}
a:hover{
  text-decoration: underline;
  color: #00a1ff;
  transform: scale(1.05);
}
  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    padding: 20px;
    margin: 0;
    font-family: "Bely Display", cursive;
    font-size: 2vw;
  }

section.primary-template {

  .sticky-header{
    position:sticky;
    top: 0;
    z-index: 10;
    min-height: 2rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    color: #30317e;
  }


  .top-links{
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    font-family: "Bely Display", cursive;
    letter-spacing: min(1px);
  }

  img{
    border-radius: 50%;
    max-width: 5%;
    height: auto;
  }

  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
}

@media screen and (max-width: 500px) {
  p {
    font-size: 0.5rem;
    padding: 5px;
  }
  .logo-container{
    align-items: center;
  }
  a{
    font-size: 0.5rem;
    padding: 0;
  }
  img {
    min-width: 10%;
    height: auto;
  }
}


</style>

