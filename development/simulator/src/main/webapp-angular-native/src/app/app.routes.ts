import { Routes } from '@angular/router';
import {UserTaskDetailsComponent} from './user-tasks/user-task-detail/user-task-details.component';

export const routes: Routes = [
  {
    path: 'tasks/:id',
    component: UserTaskDetailsComponent
  }
];
