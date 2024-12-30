import {Component, OnInit, VERSION} from '@angular/core';
import {NgIf} from "@angular/common";
import {extractTemplateParameter} from "../../util/url.util";

@Component({
  selector: 'app-user-task-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-task-details.component.html',
  styleUrl: './user-task-details.component.css'
})
export class UserTaskDetailsComponent implements OnInit {

  angularVersion = VERSION.full;

  taskId: string | null = null;
  userTask: any | null = null;
  errorMessage: string | null = null;

  constructor() {
  }

  ngOnInit(): void {

    console.info("URL: " + JSON.stringify(window.location.href));

    // cannot get the activated route in a remote standalone component because there is no router involved
    // this.taskId = this.route.snapshot.paramMap.get('id')!;

    this.taskId = extractTemplateParameter(window.location.href, "tasks");
    if (this.taskId === null) {
      this.errorMessage = "No task id found in URL - cannot load task details.";
    }

    // TODO: fetch task details from the service (now constant for POC)
    this.userTask = {
      id: this.taskId,
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
      // uiUriType: UiUriType.External // enumeration not available until imported (switch from POC to service)
    };
  }

}
