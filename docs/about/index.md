<script setup>
import TechButton from './components/TechButton.vue'

import nodeImg from './tech_icons/nodejs.svg'
import vueImg from './tech_icons/vue.svg'
import angularImg from './tech_icons/angular.svg'
import tailwingImg from './tech_icons/tailwindcss.svg'
import dockerImg from './tech_icons/docker.png'
import traefikImg from './tech_icons/traefik.png'
import typescriptImg from './tech_icons/typescript.svg'
import jsImg from './tech_icons/js.svg'
import pythonImg from './tech_icons/python.svg'
import mongoImg from './tech_icons/mongo.svg'
import gitlabImg from './tech_icons/gitlab.svg'

const techList = [
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

<style scoped>
    .tech-button-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>

# About Me

Hey. Welcome to my site. My name is Grant Kingsbury. I am a full stack developer with over 7 years of experience. I love building new things. I'm always trying to find new technologies that makes my job easier, faster, and enjoyable. 

I work closely with customers gathering and delivering requirements on time, while responding to user feedback. I take pride in the work I produce and I take user and customer feedback seriously while making sure their needs and requirements are being met. I have worked on and managed small teams using agile design to build and maintain full stack web applications from the ground up.

## Technology

Below is some of my favorite technology I use to build great software

<div class="tech-button-container">
    <TechButton v-for="tech in techList" :key="tech.description" :img="tech.img"/>
</div>