<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ img: string }>()

</script>

<template>
    <div class="transition ease-in-out container flex rounded-full mx-1 my-2 outline outline-gray-200 hover:-translate-y-1 hover:scale-110 align-middle justify-center w-12 h-12">
        <img :src="img" class="p-2" alt=""/>
    </div>
</template>

