<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <section class="middle">
      <div class="Social">
        <h1>Socials</h1>
        <div class="Instagram">
          <img src="../assets/instagram.png" />
          <h2>Instagram • alexclarity.design</h2>
        </div>
        <div class="Linkedin">
          <img src="../assets/linkedin.png" />
          <h2>Linkedin • Alex Clarity</h2>
        </div>
        <div class="Behance">
          <img src="../assets/behance.png" />
          <h2>Behance • Alex Clarity</h2>
        </div>
      </div>
      <div class="email">
        <h1>Email Me!</h1>
        <div class="Email">
          <img src="../assets/email.png" />
          <h2>Email • alexclarity.design@gmail.com</h2>
        </div>
      </div>
    </section>
  </primary-template>
</template>
<style scoped>
.middle{
  background-color: #30317e;
  padding: 5vw 5vw;
}

.Instagram{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3vw 0;
  gap: 2vw;
  img{
    width: 10%;
    height: 10%;
  }
}
.Linkedin{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3vw 0;
  gap: 2vw;
  img{
    width: 10%;
    height: 10%;
  }
}

.Behance{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3vw 0;
  gap: 2vw;
  img{
    width: 10%;
    height: 10%;
  }
}
.Email{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3vw 0;
  gap: 2vw;
  img{
    width: 10%;
    height: 10%;
  }
}

h1{
  color: white;
  font-family: "Bely Display", cursive;
  font-size: 7vw;
  letter-spacing: 0.25vw;
  margin:0;
}
h2{
  color: white;
  font-size: 4vw;
  margin: 0;
}

</style>