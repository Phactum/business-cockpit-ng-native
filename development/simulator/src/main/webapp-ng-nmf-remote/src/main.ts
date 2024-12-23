import { initFederation } from '@angular-architects/native-federation';

// native federation setup
initFederation()
  .catch(err => console.error(err))
  // .then(_ => import('./bootstrap'))
  .then(_ => import('./bootstrap-as-webcomponent'))
  .catch(err => console.error(err));
