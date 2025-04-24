<template>
  <div class="w-screen h-auto relative bg-red-900 overflow-hidden flex flex-col items-center mb-[20vh] p-10">
    <div class="absolute bottom-0 z-1">
      <img src="assets/svg/wave 1.png" class="w-screen h-auto" />
    </div>

    <div class="z-50">
      <!-- เพิ่ม flex-wrap เพื่อให้คอลัมน์ถูกจัดเรียงอย่างถูกต้อง -->
      <div id="zone4" class="flex flex-wrap justify-center p-[2rem] gap-[10rem]">
        <div class="flex flex-col items-center gap-10">
          <div class="bg-white p-7 rounded-full">
            <img src="assets/images/png/webicon.png" alt="" />
          </div>
          <div class="text-white Inter text-[15px] text-center">
            INTERACTIVE WEBSITE & <br />APPLICATION
          </div>
        </div>

        <div class="flex flex-col items-center gap-10">
          <div class="bg-white p-7 rounded-full">
            <img src="assets/images/png/kioskicon.png" alt="" />
          </div>
          <div class="text-white Inter text-[15px] text-center">
            INTERACTIVE KIOSK
          </div>
        </div>

        <div class="flex flex-col items-center gap-10">
          <div class="bg-white p-7 rounded-full">
            <img src="assets/images/png/vricon.png" alt="" />
          </div>
          <div class="text-white Inter text-[15px] text-center">
            VIRTUAL REALITY
          </div>
        </div>
      </div>

      <!-- เพิ่ม flex-wrap และ gap ที่เล็กลง -->
      <div  id="zone4-2" class="flex flex-wrap justify-center p-10 gap-[10rem]">
        <div class="flex flex-col items-center gap-10">
          <div class="bg-white p-7 rounded-full">
            <img src="assets/images/png/ar.png" alt="" />
          </div>
          <div class="text-white Inter text-[15px] text-center">
            INTERACTIVE LEARNING <br />OBJECT
          </div>
        </div>

        <div class="flex flex-col items-center gap-10">
          <div class="bg-white p-7 rounded-full">
            <img src="assets/images/png/eleaaarnicon.png" alt="" />
          </div>
          <div class="text-white Inter text-[15px] text-center">
            E-LEARNING
          </div>
        </div>

        <div class="flex flex-col items-center gap-10">
          <div class="bg-white p-7 rounded-full">
            <img src="assets/images/png/3dicon.png" alt="" />
          </div>
          <div class="text-white Inter text-[15px] text-center">
            3D MODEL & <br />ANIMATION
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
