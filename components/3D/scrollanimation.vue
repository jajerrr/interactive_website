<template>
    <div class = 'body'>
  
      <div id="banner" class="section">
        <div class="content-fit">
          <div class="title" data-before="WEBSITEDESIGN">3D ANIMATION</div>
        </div>
        <!-- <img src="/images/img/flower.png" class="decorate" alt="" style="width: 50vw; bottom: 0; right: 0;" /> -->
      </div>
  
      <div id="intro" class="section">
        <div class="content-fit">
          <div class="number">01</div>
          <div class="des">
            <div class="title">3d animation design for website</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
  
      <div id="description" class="section">
        <div class="content-fit">
          <div class="number">02</div>
          <div class="des">
            <div class="title">LUNDEV</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <img src="/images/img/leaf1.png" class="decorate" alt="" style="width: 70vw; bottom: 0; right: 0; z-index: 101;" />
      </div>
  
      <div id="contact" class="section">
        <div class="content-fit">
          <div class="number">03</div>
          <div class="des">
            <div class="title">CONTACT</div>
            <table>
              <tr><td>Email</td><td>test@gmail.com</td></tr>
              <tr><td>Phone</td><td>+841.231.235</td></tr>
              <tr><td>Website</td><td>lundevweb.com</td></tr>
              <tr><td>Youtube</td><td>@lundeveloper</td></tr>
            </table>
            <div class="sign">Lundev</div>
          </div>
        </div>
      </div>
  
      <div id="container3D"></div>
  
    </div>
  </template>
  
  
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import Section from '/components/3d/Section.vue'
  import Navbar from "/components/Home/navbar.vue";
  
  onMounted(async () => {
    const { initThree } = await import('/components/3d/bee.vue')
    initThree()
  })
  </script>
  
  <style scoped>
  @import url('https://fonts.cdnfonts.com/css/devil-breeze');
  @import url('https://fonts.cdnfonts.com/css/poppins');
  @import url('https://fonts.cdnfonts.com/css/bimbo');
  
  .body {
    margin: 0;
    background-color: #1B1B1B;
    color: #f0ffc1;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background-image:
      url('/images/img/bg.png'),
      repeating-linear-gradient(
        to right, transparent 0 500px, #73814B33 500px 501px
      );
    background-size: 100%;
   
  }
  
  *::-webkit-scrollbar {
    width: 0;
  }
  
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
  }
  
  .section {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content-fit {
    width: min(1200px, 90vw);
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-block: 10em;
  }
  
  #banner .title {
    color: #d1ff48;
    font-size: 11em;
    font-family: "devil breeze";
    font-weight: bold;
    position: relative;
    text-align: center;
  }
  
  #banner .title::before {
    content: attr(data-before);
    position: absolute;
    top: 0.5em;
    inset: 0.66em 0 0 0;
    z-index: -1;
    color: #445022;
  }
  
  .section .decorate {
    position: absolute;
  }
  
  #intro .content-fit {
    display: flex;
    gap: 30%;
    justify-content: space-between;
    align-items: center;
  }
  
  .section .number {
    font-family: "devil breeze";
    font-size: 15em;
    font-weight: bold;
  }
  
  .section .content-fit .title {
    font-family: "devil breeze";
    font-size: 5em;
    font-weight: bold;
  }
  
  #description .content-fit {
    padding-right: 30%;
  }
  
  #description .number {
    font-size: 5em;
  }
  
  #description .title {
    font-size: 7em;
    font-weight: 500;
  }
  
  #contact .content-fit {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  
  #contact table {
    width: min(800px, 90vw);
    padding-top: 2em;
    font-size: 2em;
    margin: auto;
  }
  
  #contact table td {
    padding-block: 0.5em;
    border-bottom: 1px dashed #445022;
  }
  
  #contact table td:nth-child(1) {
    text-align: left;
    font-weight: 500;
  }
  
  #contact table td:nth-child(2) {
    text-align: right;
    font-weight: 200;
  }
  
  #contact .sign {
    font-family: 'Bimbo', sans-serif;
    font-size: 10em;
  }
  
  #container3D {
    position: fixed;
    inset: 0;
    z-index: 100;
    pointer-events: none;
  }
  
  /* Responsive */
  @media screen and (max-width: 1023px){
    #banner .title {
      font-size: 5em;
    }
    #intro .content-fit {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 767px){
    #banner .title {
      font-size: 3em;
    }
    #intro .content-fit {
      flex-direction: column;
    }
    .section .number {
      font-size: 5em;
    }
    .section .content-fit .title {
      font-size: 2em;
    }
    #description .content-fit {
      padding-right: 0;
    }
    #contact table {
      font-size: 1em;
    }
    #contact .sign {
      font-size: 2em;
    }
    #container3D {
      position: absolute;
    }
  }
  </style>
  