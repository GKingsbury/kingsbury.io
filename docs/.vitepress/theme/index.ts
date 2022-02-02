
import DefaultTheme from 'vitepress/dist/client/theme-default'
import Layout from './Layout.vue'

import './tailwind.postcss'

export default {
    ...DefaultTheme,
    // override the Layout with a wrapper component that injects the slots
    Layout: Layout
  }