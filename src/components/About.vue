<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>

    <section class="middle">
      <div class="image-container">
        <img src="../assets/IMG_8166.png" alt="Skyline" />
        <h1 class="overlay-text">About Me</h1>
      </div>
    </section>
    <section class="info">
      <div class="about-container">
        <img src="../assets/headshot.JPG" alt="Face" />
        <div class="about-text">
          <h1>Hi I'm Alex!</h1>
          <p>My name is Alex Clarity. I'm currently a junior Graphic Design at the University of Minnesota, with a minor in user experience. I plan to graduate fall of 2025. I have more focused interests in logo/brand design along with web design. I like to play disc golf, basketball, and volleyball in my spare time. I also enjoy tinkering with cars and fixing broken things.</p>
        </div>
      </div>
        <div class="bio">
          <p>I was born and raised in Minneapolis, Minnesota. Growing up in the city gave me many opportunities and resources that I would not have had if I wasn't where I was. In my junior year of high school, my mom asked me where I wanted to go to college and what I wanted to go for. At that point, I hadn't really thought about it. The same day we sat down at a restaurant on the University of Minnesota Twin Cities campus and looked at the list of majors they had to offer. This excited me and I eventually saw Graphic Design. After seeing that I was intrigued, and I wanted to know more. This same year I was attending Normandale Community College for PSEO. In the second semester of my junior year at Normandale, I took a graphic design class. During this class, I fell in love with the fact that art like this can be pursued as a career. In my eyes, I see it as meaningful and useful art.</p>
        </div>

    </section>
    <section class="button">
      <a href="Contact">Contact</a>
    </section>

  </primary-template>
</template>
<style scoped>

.middle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30317e;

}

.image-container{
  position: relative;
  display: inline-block;
  max-width: 100%;
  width: auto;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
.overlay-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 6vw;
  font-family: "Bely Display", cursive;
  text-align: center;
  background-color: #30317e;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.about-container{
  display: flex;
  padding: 5rem 0 0 5rem;
  h1{
    text-align: left;
    font-size: 5vw;
    padding-left: 3rem;
    color: white;
    margin: 0;
  }
  img{
    border-radius: 50%;
    width: 30%;
    height: 30%;
    border: 8px solid white;

  }
  p{
    color: white;
    font-size: 2vw;
    padding: 0 8rem 0 3rem;
    line-height: 3.5vw;
  }
}
.info{
  background-color: #30317e;
}
.bio{
  padding: 3rem 5rem 5rem 5rem;
  font-size: 1.5vw;
  color:white;
  line-height: 3vw;
}
.button{
  background-color: #00a1ff;
  display : flex;
  justify-content: center;
  padding: 1vw;
  a{
    text-decoration: none;
    color: white;
    font-size: 2.5vw;
    background-color: #30317e;
    padding: 1vw;
    border-radius: 1vw;
    font-family: 'Bely Display', cursive;
  }
  a:hover{
    background-color: #001466;
    transform: scale(1.05);
  }
}

/* Mobile */
@media screen and (max-width: 500px){
  .bio{
    padding: 1rem 2rem 2rem 2rem;
  }
  .about-container{
    padding: 2rem 0 0 2rem;
    img{
      border: 3px solid white;
    }
    h1{
      padding-left: 1rem;
    }
    p{
      padding: 0 2rem 0 1rem;
    }
  }
}
/* Tablet */
@media screen and (min-width: 501px) and (max-width: 1024px) {
  .bio{
    padding: 2rem 3.5rem 3.5rem 3.5rem;
  }
  .about-container {
    padding: 3.5rem 0 0 3.5rem;
    img {
      border: 5px solid white;
    }
    h1{
      padding-left: 2rem;
    }
    p{
      padding: 0 3.5rem 0 2rem;
    }
  }
}


</style>