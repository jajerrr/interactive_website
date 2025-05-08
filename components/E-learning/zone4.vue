<template>

    <div class="w-full h-auto  relative Inter text-black pb-[10vh]">
        <div class="z-20">
            <img src="assets/elearn/Rectangle 258.png" class="w-screen"/>
        </div>
        <div class="z-30 absolute top-[-15vh] right-[-10vw]">
            <img src="assets/elearn/vr headset-Photoroom (2) 1.png" class=" w-[80%]"/>
        </div>
        <div class="z-20 absolute top-[-15vh] right-[-5vw]">
            <img src="assets/elearn/Star 28.png" class=" w-[80%]"/>
        </div>
        <div class="z-30 absolute  top-[30vh] w-screen space-y-10">
            <div class="flex justify-center items-center space-x-4">
                <img src="assets/elearn/Star 35.png" alt="" class="h-auto">
                <h class="text-[30px]  ">Features</h>
                <img src="assets/elearn/Star 35.png" alt="" class="h-auto">
            </div>
            <div class="text-[18px] text-center   pt-10 p-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry            
            </div>


            <div class="flex h-screen">
  <!-- ฝั่งซ้าย: รูปภาพแนวตั้ง -->
  <div class="flex flex-col justify-center items-center  w-1/4 pl-10 space-y-10">
    <img src="assets/elearn/image 170.png" alt="" class="rounded-xl" />
    <img src="assets/elearn/image 170.png" alt="" class="rounded-xl" />
    <img src="assets/elearn/image 170.png" alt="" class="rounded-xl" />
  </div>

  <!-- ฝั่งขวา: วิดีโอ -->
  <div class="flex-1 flex justify-center items-center px-5">
    <video
      ref="videoRef"
      muted
      loop
      playsinline
      controls
      class="w-full h-[74%] object-cover rounded-xl"
    >
      <source src="assets/video/Smart Museum.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

            
        </div>
    
    </div>
    </template>