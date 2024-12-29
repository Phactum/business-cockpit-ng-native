import {PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading} from "@angular/router";
import {appRoutes} from "./app/app.routes";
import {createCustomElement} from "@angular/elements";
import {AppComponent} from "./app/app.component";
import {NgZone} from "@angular/core";
import {createApplication} from "@angular/platform-browser";
import {UserTaskDetailsComponent} from "./app/user-tasks/user-task-details/user-task-details.component";

(async () => {

  console.info('Bootstrapping Angular Native BC as Web Component');

  // create Application without bootstrapping it
  const app = await createApplication({
    providers: [
      provideRouter(
        appRoutes,
        withPreloading(PreloadAllModules),
        withComponentInputBinding()), // TODO: maybe withComponentInputBinding was missing
      // share Zone with host (other solution would be to use signals)
      // @ts-ignore
      globalThis.ngZone ? {provide: NgZone, useValue: globalThis.ngZone} : [],
    ],
  });

  // Angular Native Federation (no module in name)
  const webappNgNfRemoteRoot =
    // transform a standalone component into a web component
    createCustomElement(AppComponent, {
      injector: app.injector,
    });
  customElements.define('webapp-ng-nf-remote-root', webappNgNfRemoteRoot);

  // expose user task form as a component (without needing remote host routing)
  const userTaskDetailsRemoteRoot =
    createCustomElement(UserTaskDetailsComponent, {
      injector: app.injector,
    });
  customElements.define('user-task-form-remote-root', userTaskDetailsRemoteRoot);
})();
