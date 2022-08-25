import { defineConfig } from 'vite';
import { svgBuilder } from './src/icons/index';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
    resolve: {
        // 設置別名
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@comps': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@router': path.resolve(__dirname, 'src/router'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@tools': path.resolve(__dirname, 'src/tools'),
            '@plugins': path.resolve(__dirname, 'src/plugins'),
            '@icon': path.resolve(__dirname, 'src/icons'),
            '@css': path.resolve(__dirname, 'src/css'),
        },
    },
    plugins: [vue(), svgBuilder('./src/icons/svg/')],
    server: {
        port: 9000, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 9000,
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
});
