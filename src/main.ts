import { createApp } from 'vue'
import App from './App.vue';
import commonComponents from "@/components/common";
import router from './router/router';

const app = createApp(App);

for (let i = 0; i < commonComponents.length; i++) {
    const commonComponent = commonComponents[i];
    app.component(commonComponent.name, commonComponent);
}

app
    .use(router)
    .mount('#app');
