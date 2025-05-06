<template>
  <div
    class="body w-full h-auto relative overflow-hidden scrollContainer cursor-default bg-[#0B1F04]"
  >
  <div class=" top-0 left-0 w-full z-50 fixed">
      <HomeNavbar />
     </div>

   

    <div
      id="banner"
      class="section relative overflow-hidden w-full h-screen bg-cover bg-no-repeat bg-center"
    >
    <div>
      <div class="content-fit z-20 absolute right-[-10vw] top-[30vh]">
        <div class="title">3D MODEL AND</div>
        <div class="title">ANIMATIONS</div>
      </div>
<!--       
       <div class="absolute right-0 top-0 z-10">
        <img src="assets/3d/3.svg" class="w-full" alt="" />
      </div> -->
    
    </div>
     

      <!-- รูปไม้ -->
      <div class="absolute left-0 bottom-[-20vh] z-0">
        <img src="assets/3d/ging.svg" class="w-[45vw]" alt="" />
      </div>

      <!-- รูปหิน -->
      
      <div class="absolute right-0 top-0 z-0">
        <img src="assets/3d/1.svg" class="w-screen" alt="" />
      </div>
      

     
    </div>

    <div
      id="intro"
      class="section  relative w-full h-auto"
    >
      <div class="content-fit z-40" style="padding: 20vw;">
        
        <div class="des ml-[10vw]">
          <div class="title">3d animation design for website or other</div>
          <p>
            through advanced media to drive your business into the new era seamlessly. Our goal is to leave a lasting impression on customers and users by presenting information in a clear, visually engaging, and interactive way. We specialize in modern presentation technologies such as Augmented Reality, Virtual Reality, and 3D Animation
          </p>
        </div>
      </div>
      <div class="absolute right-[-5vw] top-[20vh] z-0">
        <img src="assets/3d/Mask group-1.svg" class="w-[45vw]" alt="" />
      </div>
    
    </div>

    <div
      id="description"
      class="section  flex space-x-[10vw] items-center relative bg-cover bg-no-repeat bg-center w-full h-auto"
    >
    <div class="z-0">
        <img src="assets/3d/ging2.svg" class="w-[90vw]" alt="" />
      </div>
     
      <div class="content-fit z-40">
        <div class="number">02</div>
        <div class="des">
          <p>
            through advanced media to drive your business into the new era seamlessly. Our goal is to leave a lasting impression on customers and users by presenting information in a clear, visually engaging, and interactive way. We specialize in modern presentation technologies such as Augmented Reality, Virtual Reality, and 3D Animation
          </p>
        </div>
      </div>
      
    </div>

    <div
  id="contact"
  class="section relative bg-cover bg-no-repeat bg-center w-full h-auto"
>
  <!-- Footer: ปรับให้อยู่เหนือภาพและติดกับด้านล่าง -->
   <div class = "flex justify-center items-center">

 
  <footer class="absolute bottom-[5vh] text-black bg-transparent z-50   w-[80vw]  p-10">
    <!-- <div class="w-[80vw] h-[2px] my-2 flex justify-center items-center bg-[#000000] px-[10vw] pb-10"></div> -->
    <!-- container -->
    <div class="flex flex-row " >
      <div class="text-[50px] Inter w-1/2">
        SUBSCRIBE TO <br />OUR NEWSLETTER
      </div>
      <div class="w-1/2">
        <input
          type="email"
          placeholder="Enter Your Email"
          class="email-input w-[100%] h-[50%] rounded-2xl bg-white text-gray-500 border-none outline-none"
        />
      </div>
    </div>

    <div class="mt-[5rem] md:flex md:justify-between text-[15px]">
      <div class="flex flex-col md:flex-row md:justify-between  gap-[5vw]">
        <div class="mb-4">
          <ul>
            <li class="mb-4">
              <a href="https://flowbite.com/">INTERACTIVE MEDIA</a>
            </li>
            <li>
              Payatai Plaza, 128/323-333 Floor 30 <br />
              Phaya Thai Rd, Khwaeng Thung Phaya Thai, <br />
              Khet Ratchathewi, Bangkok 10400
            </li>
          </ul>
        </div>
        <div class="mb-4 ml-[5vw]">
          <ul>
            <li class="mb-4">
              <a href="https://flowbite.com/">CONTACT</a>
            </li>
            <li>E-mail : info@clicknext.com</li>
            <li>Tel : 02-217-7900</li>
            <li>Fax : 02-612-9783</li>
          </ul>
        </div>
        <div class="mb-4 absolute right-[5vw]">
          <ul>
            <li class="mb-4">
              <a href="https://flowbite.com/" class="">
                Download on mobile for new experience
              </a>
            </li>
            <li class="flex gap-5 ">
              <img src="assets/svg/apple.svg" class="h-[2rem] mr-4" alt="Logo" />
              <img src="assets/svg/google.svg" class="h-[2rem] mr-4" alt="Logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>


  </footer>
  </div>
  <!-- รูปภาพที่อยู่ด้านล่าง -->
  <div class="z-10 absolute bottom-0 right-[-20vw]">
    <img src="assets/3d/Clip path group2.svg" class="w-[70vw]" alt="" />
  </div>
  <div class="z-1">
    <img src="assets/3d/Clip path group3.svg" class="w-screen" alt="" />
  </div>
</div>

    <div id="container3D"></div>
  </div>
</template>

<script setup >
import { onMounted } from "vue";
import Navbar from "/components/Home/navbar.vue";
import Footer from "/components/Home/footer.vue";

onMounted(async () => {
  const { initThree } = await import("/components/3d/bee.vue");
  initThree();
});
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/devil-breeze");
@import url("https://fonts.cdnfonts.com/css/poppins");
@import url("https://fonts.cdnfonts.com/css/bimbo");

.body {
  /* margin: 0; */
  background-color: #0B1F04;
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
  width: min(1200px, 100vw);
  min-height: 100vh;
  margin-top:10vh ;
}

#banner .title {
  color: #f5ff3d;
  font-size: 7em;
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
  color: #f0ffc1;
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
