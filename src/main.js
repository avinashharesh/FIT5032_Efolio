// import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4VtTMH6aNrfeSrdN8KkzJ_mKguNiCPco",
  authDomain: "week7-avinash.firebaseapp.com",
  projectId: "week7-avinash",
  storageBucket: "week7-avinash.appspot.com",
  messagingSenderId: "1073628342763",
  appId: "1:1073628342763:web:19662e2217473e9d8ed1ae"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Create the Vue app instance
const app = createApp(App);

// Use PrimeVue with Aura theme
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
