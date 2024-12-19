import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
// import {UiUriType, UserTask} from "@vanillabp/bc-official-gui-client";

@Component({
  selector: 'app-user-task-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-task-details.component.html',
  styleUrl: './user-task-details.component.css'
})
export class UserTaskDetailsComponent implements OnInit {

  taskId!: string;
  userTask: any | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get task ID from the route parameters
    this.taskId = this.route.snapshot.paramMap.get('id')!;

    // fetch task details from the service (now constant)
    this.userTask = {
      id: "testId",
      createdAt: new Date(),
      updatedAt: new Date(),
      workflowModuleId: "exampleModule",
      bpmnProcessId: "exampleProcess",
      title: {en: "Example Task", de: "Beispielaufgabe"},
      assignee: {
        id: "testId",
        display: "Test User",
        email: "test@user.com"
      },
      comment: "Example comment",
      taskDefinition: "exampleDefinition",
      uiUri: "/example/ui",
      workflowModuleUri: "/example/workflow",
      // uiUriType: UiUriType.External
    };
  }
}
