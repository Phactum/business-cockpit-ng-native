import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {AppComponent} from "./app/app.component";
import {NgZone} from "@angular/core";

(async () => {

  console.info('Bootstrapping Angular Native BC as Web Component');

  // create Application without bootstrapping it
  const app = await createApplication({
    providers: [
      provideRouter(routes),
      // @ts-ignore
      // share Zone with host (other solution would be to use signals)
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
    ],
  });

  // Angular Native Federation (no module in name)
  const webappNgNfRemoteRoot =
    // transform a standalone component into a web component
    createCustomElement(AppComponent, {
      injector: app.injector,
    });

  customElements.define('webapp-ng-nf-remote-root', webappNgNfRemoteRoot);
})();
