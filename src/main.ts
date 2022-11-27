import { createApp } from 'vue'
import App from './App.vue';
import commonComponents from "@/components/common";
import libComponents from "@/components/lib";
import router from './router/router';

const app = createApp(App);

for (let i = 0; i < commonComponents.length; i++) {
    const commonComponent = commonComponents[i];
    app.component(commonComponent.name, commonComponent);
}
for (let i = 0; i < libComponents.length; i++) {
const libComponent = libComponents[i];
    app.component(libComponent.name, libComponent);
}

app
    .use(router)
    .mount('#app');
