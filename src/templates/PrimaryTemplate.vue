<script setup>

import ACLogo from "../assets/ACLogo.png";
</script>

<template>
  <section class="primary-template">
    <header class="sticky-header">
      <img :src="ACLogo">
      <p>Alex Clarity</p>
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
  display: flex;
  text-decoration: none;
  color: inherit;
  font-size: 2vw;
  padding: 10px;
  justify-content: space-between;
}
a:hover{
  text-decoration: underline;
}

section.primary-template {
  .sticky-header{
    position:sticky;
    top: 0;
    z-index: 10;
    min-height: 2rem;
    background-color: white;
  }
  header{
      display: flex;
      color: #30317e;
      align-items: center;
      font-family: "Bely Display", cursive;
      letter-spacing: min(1px);
      padding-left: 20px;
      font-size: 2vw;
      max-height: 80px;
    }
  p{
    padding: 20px;
  }

    .top-links{
      display: flex;
      background-color: white;
      color: #30317e;
      justify-content: center;
      align-items: end;
      font-family: "Bely Display", cursive;
      letter-spacing: min(1px);
      padding-left: 20px;
      padding-right: 20px;
      font-size: 2vw;
    }

      img{
        border-radius: 50%;
        max-width: 4%;
        height: auto;
      }

  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;


  }
}

@media screen and (width > 500px) {
  header{
    flex-wrap: nowrap;
  }
}

</style>

