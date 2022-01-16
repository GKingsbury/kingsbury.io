<script setup lang="ts">
import { ref } from 'vue'
import TechButton from './TechButton.vue'

let showTitle = ref(false)
let showAbout = ref(false)

setTimeout(() => {
  showTitle.value = true
}, 200)

setTimeout(() => {
  showAbout.value = true
}, 400)

interface TechButton {
  img: string,
  description: string
}

import nodeImg from '/src/assets/images/tech_icons/nodejs.svg'
import vueImg from '/src/assets/images/tech_icons/vue.svg'
import angularImg from '/src/assets/images/tech_icons/angular.svg'
import tailwingImg from '/src/assets/images/tech_icons/tailwindcss.svg'
import dockerImg from '/src/assets/images/tech_icons/docker.png'
import traefikImg from '/src/assets/images/tech_icons/traefik.png'
import typescriptImg from '/src/assets/images/tech_icons/typescript.svg'
import jsImg from '/src/assets/images/tech_icons/js.svg'
import pythonImg from '/src/assets/images/tech_icons/python.svg'
import mongoImg from '/src/assets/images/tech_icons/mongo.svg'
import gitlabImg from '/src/assets/images/tech_icons/gitlab.svg'

import experientImg from '/src/assets/images/gaylord.png'
import runeliteImg from '/src/assets/images/runelite.jpg'

const techList: TechButton[] = [
  { img: nodeImg, description: 'Node.js' },
  { img: vueImg, description: 'Vue (2 & 3)' },
  { img: angularImg, description: 'Angular' },
  { img: tailwingImg, description: 'Tailwind CSS' },
  { img: dockerImg, description: 'Docker' },
  { img: traefikImg, description: 'Traefik' },
  { img: typescriptImg, description: 'TypeScript' },
  { img: jsImg, description: 'JavaScript' },
  { img: pythonImg, description: 'Python' },
  { img: mongoImg, description: 'MongoDB' },
  { img: gitlabImg, description: 'GitLab' },
]

</script>

<template>
<div class="min-h-screen bg-gradient-to-l bg-indigo-500 flex flex-col relative overflow-hidden">
  <div class="flex flex-col bg-indigo-400 min-h-screen sm:w-1/2 w-5/6 mx-auto py-20">
    <transition name="fade" >
      <div v-if="showTitle" class="pt-10 pb-8 before:-shadow-xl mx-auto rounded-xl px-10 before:block before:absolute before:-inset-4 before:-skew-y-1 before:bg-white before:drop-shadow-lg relative inline-block">
        <div class="mx-auto relative" >
          <div class="sm:text-5xl text-4xl text-center mb-5"><span class="font-bold text-indigo-500">Kingsbury</span><span class="text-gray-300">.io</span> </div>
        </div>
        <div class="relative mx-auto flex flex-wrap my-10 w-5/6">
          <div class="lg:basis-1/2 p-2 text-lg text-gray-400">
            Hey. Welcome to my site. My name is <span class="font-bold text-indigo-500">Grant Kingsbury</span>. I am a full stack developer with over 7 years of experience.
            I love building new things. I'm always trying to find new technologies that makes my job easier, faster, and enjoyable. 
          </div>
          <div class="lg:basis-1/2 p-2 flex flex-wrap align-center h-min">
            <TechButton v-for="tech in techList" :key="tech.description" :img="tech.img"/>
          </div>
        </div>z 
      </div>
    </transition>

    <transition name="fade" >
      <div v-if="showAbout" class="pt-10 mt-20 pb-8 before:-shadow-xl mx-auto rounded-xl px-10 before:block before:absolute before:-inset-4 before:skew-y-1 before:bg-white before:drop-shadow-lg relative inline-block">
        <div class="mx-auto relative" >
          <div class="sm:text-4xl text-3xl text-center mb-5"><span class="font-bold text-indigo-500">Personal Projects</span></div>
        </div>
        <div class="relative mx-auto flex flex-wrap my-10 w-5/6">
          <div class="lg:basis-1/2 p-2 text-lg text-gray-400 w-full justify-center container">
              <img class="rounded-full h-40 w-40 mx-auto transition ease-in-out hover:scale-110" :src="experientImg" />
          </div>  
          <div class="lg:basis-1/2 p-2 flex flex-wrap align-center">
            <p class="text-2xl text-indigo-500 font-bold">Experient Hotel Notifier</p>
            <div class="text-gray-400">
              Every year my friends and I go to a music and gaming convention located at the Gaylord National Restory in National Harbor, MD. Around 20,000 people go every year and not every one is guarenteed a room. 
              Because we weren't able to get a room every year when booking would open, I created software to help us secure a room. 
              I created a <a href="https://nodejs.org/en/about/" class="font-bold text-indigo-500 underline">Node.js</a> based application using <a href="https://github.com/puppeteer/puppeteer" class="font-bold text-indigo-500 underline">Puppeteer</a> to crawl Experient's JavaScript created webpage to notify us
              any time an available room would show up. It secured us a room in 2020 and secured a friend a room in 2022. 
            </div> 
          </div>
        </div>
        <div class="relative mx-auto flex flex-wrap my-10 w-5/6">
          <div class="lg:basis-1/2 p-2 text-gray-400 w-full justify-center container lg:order-1 order-2">
            <p class="text-2xl text-indigo-500 font-bold ">RuneLite Fishing Plugin</p>
            <div class="text-gray-400">
              Updated fishing plugin in popular Oldschool Runescape client, <a href="https://github.com/runelite/runelite" class="font-bold text-indigo-500 underline">RuneLite</a>, to give better notifications while fishing minnows in game. 
              While fishing minnows in game, a flying fish can come up and start eating them out of your inventory if you're not paying attention. I modified the existing fishing plugin to give an option to enable these notifications using 
              the user's preconfigured notification settings.
            </div> 
          </div>
          <div class="lg:basis-1/2 p-2 text-lg text-gray-400 w-full justify-center container lg:order-2 order-1 transition ease-in-out hover:scale-110">
            <img class="rounded-full h-40 w-40 mx-auto" :src="runeliteImg" />
          </div>
        </div>
      </div>
    </transition>

  </div>
</div>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>