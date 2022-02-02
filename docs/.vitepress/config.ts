import { defineConfig } from 'vitepress'

export default defineConfig({
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'About',
                link: '/about/',
                activeMatch: '^/about'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/GKingsbury'
            },
            {
                text: 'LinkedIn',
                link: 'https://www.linkedin.com/in/gkingsbury'
            },
        ],
        sidebar: [],
        lastUpdated: 'Last Updated'
    },
    title: 'Kingsbury.io',
    description: 'Full stack developer with over seven years of experience',
    
})