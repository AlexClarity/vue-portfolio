<script setup>

import ACLogo from "../assets/ACLogo.png";
</script>

<template>
  <section class="primary-template">
    <header>
      <p>Alex Clarity</p>
      <div class="top-nav">
        <div class="top-links">
          <a href="Home">Home</a>
          <a href="About">About Me</a>
          <a href="Contact">Contact</a>
          <img :src="ACLogo">
        </div>
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
  font-size: 15pt;
  padding: 10px;
}
a:hover{
  text-decoration: underline;
}

section.primary-template {
  header{
      display: flex;
      color: #30317e;
      align-items: center;
      justify-content: space-between;
      font-family: "Bely Display", cursive;
      letter-spacing: min(1px);
      padding-left: 20px;
      font-size: 30px;
      max-height: 80px;
    }

    .top-links{
      display: flex;
      background-color: white;
      color: #30317e;
      justify-content: end;
      align-items: center;
      font-family: "Bely Display", cursive;
      letter-spacing: min(1px);
      padding-left: 20px;


    img{
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: 1rem;
    }
  }
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    img{
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
