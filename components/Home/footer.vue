<template>
    <footer 
      class="px-[5vw] bg-[#301240] p-[10rem] mt-[10vh] rounded-[100px]  relative"
    >
      <!-- container -->
      <div class="flex flex-row">
        <div class="text-white text-[50px] Inter w-1/2">
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
  
      <div class="mt-[5rem] md:flex md:justify-between text-[20px]">
        <div class="flex flex-col md:flex-row md:justify-between md:gap-4">
          <div class="mb-4">
            <ul class="text-white">
              <li class="mb-4">
                <a href="https://flowbite.com/" class="header-footer"
                  >INTERACTIVE MEDIA</a
                >
              </li>
              <li>
                Payatai Plaza, 128/323-333 Floor 30 <br />
                Phaya Thai Rd, Khwaeng Thung Phaya Thai, <br />
                Khet Ratchathewi, Bangkok 10400
              </li>
            </ul>
          </div>
          <div class="mb-4 ml-[5vw]">
            <ul class="text-white">
              <li class="mb-4">
                <a href="https://flowbite.com/" class="header-footer">CONTACT</a>
              </li>
              <li>E-mail : info@clicknext.com</li>
              <li>Tel : 02-217-7900</li>
              <li>Fax : 02-612-9783</li>
            </ul>
          </div>
          <div class="mb-4 absolute right-[5vw]">
            <ul class="text-white">
              <li class="mb-4">
                <a
                  href="https://flowbite.com/"
                  class="header-footer"
                  >Download on mobile for new experience</a
                >
              </li>
              <li class="flex">
                <img src="assets/svg/apple.svg" class="h-[2rem] mr-4" alt="Logo" />
                <img src="assets/svg/google.svg" class="h-[2rem] mr-4" alt="Logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  onMounted(() => {
    const footer = document.querySelector(".footer");
  
    // GSAP ScrollTrigger animation
    gsap.fromTo(
      footer,
      { y: "5%" }, // Start position (hidden below the screen)
      {
        y: "0%", // End position (original position)
        duration: 1,
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
        trigger: footer, // When the footer comes into view
        start: "top bottom", // Start when the top of the footer reaches the bottom of the viewport
        end: "bottom top", // End when the bottom of the footer reaches the top of the viewport
        scrub: true, // Link animation to the scroll position
        markers: false, // Remove markers (useful for debugging)
        onEnter: () => footer.classList.add("slide-up"), // Add class when entering
        onLeave: () => footer.classList.remove("slide-up"), // Remove class when leaving
        // onEnterBack: () => footer.classList.add("slide-up"), // Add class when coming back into view
        // onLeaveBack: () => footer.classList.remove("slide-up"), // Remove class when leaving the viewport
      },
      }
    );
  });
  </script>
  
  <style scoped>
 /* Footer class for GSAP animation */
.footer {
  position: relative;
  transform: translateY(100%); /* Start hidden below the screen */
  transition: transform 1s ease; /* Smooth transition for manual style changes */
}

.footer.slide-up {
  transform: translateY(100%); /* Slide up to the original position */
}
  </style>
  