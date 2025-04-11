<template>
  <div
    class="body w-full h-auto relative overflow-hidden scrollContainer cursor-default"
  >
    <div class="fixed z-50">
      <Navbar />
    </div>
    <!-- <div class="fixed z-50 w-screen bottom-0">
      <div class="absolute bottom-[-10vh] left-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
      <div class="absolute bottom-[-10vh] right-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
    </div> -->

    <div
      id="banner"
      class="section bg-[url('assets/images/png/forest.png')] relative overflow-hidden w-full h-screen bg-cover bg-no-repeat bg-center"
    >
      <div class="content-fit z-10 relative">
        <div class="title" data-before="ANIMATIONS">3D MODEL AND</div>
      </div>

      <!-- รูปไม้ -->
      <div class="absolute left-0 bottom-[-20vh] z-0">
        <img src="assets/images/png/wood.png" class="w-[45vw]" alt="" />
      </div>

      <!-- รูปหิน -->
      <div class="absolute right-0 bottom-[-20vh] z-0">
        <img src="assets/images/png/vacanorock.png" class="w-[35vw]" alt="" />
      </div>

      <!-- หญ้า -->
      <div class="absolute bottom-[-10vh] left-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
      <div class="absolute bottom-[-10vh] right-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
    </div>

    <div
      id="intro"
      class="section bg-[url('assets/images/png/forest3.png')] relative w-full h-auto"
    >
      <div class="content-fit z-40">
        <div class="number">01</div>
        <div class="des">
          <div class="title">3d animation design for website</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
      </div>
      <div class="absolute left-[-5vw] bottom-[-5vh] z-0">
        <img src="assets/images/png/purplemon.png" class="w-[45vw]" alt="" />
      </div>
      <div class="absolute right-[-20vw] bottom-[5vh] z-0">
        <img src="assets/images/png/tree.png" class="w-[50vw]" alt="" />
      </div>
      <div class="absolute bottom-[-10vh] left-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
      <div class="absolute bottom-[-10vh] right-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
    </div>

    <div
      id="description"
      class="section bg-[url('assets/images/png/forest2.png')] relative bg-cover bg-no-repeat bg-center w-full h-auto"
    >
      <div class="content-fit z-40">
        <div class="number">02</div>
        <div class="des">
          <div class="title">LUNDEV</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
      </div>
      <div class="absolute left-[-10vw] bottom-[-5vh] z-0">
        <img src="assets/images/png/mashroom.png" class="w-[45vw]" alt="" />
      </div>
      <div class="absolute right-[25vw] bottom-[27vh] z-0">
        <img src="assets/images/png/door.png" class="w-[20vw]" alt="" />
      </div>
      <div class="absolute bottom-[-10vh] left-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
      <div class="absolute bottom-[-10vh] right-[-10vw] z-0">
        <img src="assets/svg/grass.svg" class="w-[120vw]" alt="" />
      </div>
    </div>

    <div
      id="contact"
      class="section bg-[url('assets/images/png/forest4.png')] relative bg-cover bg-no-repeat bg-center w-full h-auto"
    >
      >
      <div class="content-fit">
        <div class="number">03</div>
        <div class="des">
          <div class="title">CONTACT</div>
          <table>
            <tr>
              <td>Email</td>
              <td>test@gmail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+841.231.235</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>lundevweb.com</td>
            </tr>
            <tr>
              <td>Youtube</td>
              <td>@lundeveloper</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div id="container3D"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "/components/Home/navbar.vue";
import Footer from "/components/Home/footer.vue";

onMounted(async () => {
  const { initThree } = await import("/components/3D/bee.vue");
  initThree();
});
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/devil-breeze");
@import url("https://fonts.cdnfonts.com/css/poppins");
@import url("https://fonts.cdnfonts.com/css/bimbo");

.body {
  /* margin: 0; */
  background-color: #1b1b1b;
  color: #f0ffc1;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  background-image: url("/images/img/bg.png"),
    repeating-linear-gradient(
      to right,
      transparent 0 500px,
      #73814b33 500px 501px
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

/* .section {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

.content-fit {
  width: min(1200px, 90vw);
  margin: auto;
  min-height: 100vh;
  position: relative;
  padding-block: 10em;
}

#banner .title {
  color: #f5ff3d;
  font-size: 10em;
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
  color: #662375;
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
  font-family: "Bimbo", sans-serif;
  font-size: 10em;
}

#container3D {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
}

/* Responsive */
@media screen and (max-width: 1023px) {
  #banner .title {
    font-size: 5em;
  }
  #intro .content-fit {
    flex-direction: column;
  }
}
@media screen and (max-width: 767px) {
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
