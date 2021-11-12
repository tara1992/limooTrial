import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretSquareLeft} from "@fortawesome/free-solid-svg-icons";
import { faCaretSquareRight} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone);
library.add(faFontAwesome)
library.add(faCircle);
library.add(faBars);
library.add(faQuoteRight);
library.add(faQuoteLeft);
library.add(faCaretSquareLeft);
library.add(faCaretSquareRight);
library.add(faMapMarkerAlt);
library.add(faPhoneAlt);
library.add(faPrint);
library.add(faEnvelope);
library.add(faFacebook);
library.add(faLinkedin);
library.add(faTwitter);
library.add(faWindowClose);
library.add(faInstagram);


createApp(App)
.use(store)
.use(router)
.use(router)

.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
