import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faBoxArchive, faUser);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
