import { Routes } from '@angular/router';
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {UserTaskDetailsComponent} from "./user-tasks/user-task-details/user-task-details.component";

export const appRoutes: Routes = [

  {
    // TODO: remove segment console logger for further development
    matcher: segments => {
      console.info("Remote segments: ", segments);
      return segments.length === 0 ? {consumed: segments} : null;
    },
    component: NotFoundPageComponent,
  },
  {
    path: 'tasks/:id',
    component: UserTaskDetailsComponent
  },
  // fallback for the rest (must be the last route)
  {
    path: '**',
    component: NotFoundPageComponent
  }

];
