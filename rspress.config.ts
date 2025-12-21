import * as path from 'node:path';
import {defineConfig} from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';
import readingTime from 'rspress-plugin-reading-time';
import toc from 'rspress-plugin-toc';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'Maa Auto Naruto',
    icon: '/logo.ico',
    plugins: [alignImage(), readingTime({
        defaultLocale: 'zh-CN',
    }), toc()],
    logo: {
        light: '/rspress-light-logo.png',
        dark: '/rspress-dark-logo.png',
    },
    themeConfig: {
        lastUpdated: true,
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/duorua/narutomobile',
            },
        ],
    },
});