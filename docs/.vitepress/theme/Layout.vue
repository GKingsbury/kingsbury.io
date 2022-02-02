<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #page-bottom>
      <p class="text">MIT Licensed | Copyright © {{new Date().getFullYear()}} Grant Kingsbury</p>
    </template>
  </Layout>
</template>