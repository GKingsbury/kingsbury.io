<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ img: string }>()
</script>

<template>
    <div class="tech-button">
        <img :src="img" class="p-2" alt=""/>
    </div>
</template>

<style scoped>
 .tech-button {
     border-radius: 9999px;
     width: 3rem;
     height: 3rem;
     margin: 5px;
 }
</style>