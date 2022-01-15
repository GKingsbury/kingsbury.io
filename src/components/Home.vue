<script setup lang="ts">
import { ref } from 'vue'
import TechButton from './TechButton.vue'

let show = ref(false)

setTimeout(() => {
  show.value = true
}, 200)

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
<div class="min-h-screen bg-gradient-to-l from-blue-200 to-purple-300 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
  <transition name="fade" >
    <div v-if="show" class="relative pt-10 pb-8 bg-gray-100 shadow-xl ring-2 ring-offset-2 ring-gray-900/5 md:w-1/2 w-5/6 mx-auto rounded-xl px-10">
      <div class="mx-auto" >
        <div class="sm:text-5xl text-4xl text-center mb-5"><span class="font-bold text-indigo-900">Kingsbury</span><span class="text-gray-300">.io</span> </div>
        <hr/>
      </div>
      <div class="mx-auto flex flex-wrap my-10 w-5/6">
        <div class="lg:basis-1/2 p-2 text-gray-400">
          Hey. Welcome to my site. My name is <span class="font-bold text-indigo-900">Grant Kingsbury</span>. I am a full stack developer with over 7 years of experience.
          I love building new things. I'm always trying to find new technologies that makes my job easier, faster, and enjoyable. 
        </div>
        <div class="lg:basis-1/2 p-2 flex flex-wrap">
          <TechButton v-for="tech in techList" :key="tech.description" :img="tech.img"/>
        </div>
      </div>
    </div>
  </transition>
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