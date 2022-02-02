import { defineConfig } from 'vitepress'

export default defineConfig({
    themeConfig: {
        nav: [
            {
                text: 'About',
                link: '/about/',
                activeMatch: '^/about'
            },
            {
                text: 'Blog',
                link: '/blog'
            },
        ],
        sidebar: [],
    },
    title: 'Kingsbury.io',
    description: 'Personal Site and Blog',
})