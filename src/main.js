import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import custom  */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { faMap } from '@fortawesome/free-regular-svg-icons';

import { faClock } from '@fortawesome/free-regular-svg-icons';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { faTruck } from '@fortawesome/free-solid-svg-icons';

import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
/* import custom  */

library.add(
  faMagnifyingGlass,
  faBoxArchive,
  faUser,
  faMap,
  faClock,
  faCheck,
  faTruck,
  faDollarSign,
  faCreditCard,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
