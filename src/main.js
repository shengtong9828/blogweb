import { createApp } from 'vue'
import App from './App.vue'
import { userPlugins } from '@/plugins'

const app = createApp(App)

userPlugins(app)

app.mount('#app')
