import {Routes} from '@angular/router';
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {UserTaskDetailsComponent} from "./user-tasks/user-task-detail/user-task-details.component";

export const routes: Routes = [

  {
    path: 'tasks/:id',
    component: UserTaskDetailsComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
