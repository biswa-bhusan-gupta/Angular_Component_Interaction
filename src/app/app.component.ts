import { Component } from "@angular/core";

@Component({
  selector: "app-root",

  // templateUrl: "./app.component.html",
  template: `<div>
    <h1>
      {{ component }}
    </h1>
    <p>{{ recieveTestData }}</p>
    <p *ngFor="let i of arrTest">
      Array Details from Test to App : {{ i.name }} {{ i.tech }}
    </p>
    <!-- TEST COMPONENT = APP COMPONENT -->
    <app-test
      *ngFor="let i of sendAppArr"
      [recieveAppArr]="i"
      [recieveAppData]="sendAppData"
      (sendTestData)="recieveTestData = $event"
      (sendTestArr)="recieveTestArr($event)"
    ></app-test>

    <br /><br />

    <h3>Local References</h3>
    <label>Enter Name : </label>
    <input type="text" class="form-control" #nameInput />
    <br />
    <br />
    <button (click)="sendName(nameInput)">Send Name</button>
    <h4>Name is {{ infoData }}</h4>
  </div> `,

  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  component = "App Component";
  sendAppData = "From App to Test"; // DECLARING AS PROPERTY TO SEND DATA FROM APP COMPONENT TO CHILD COMPONENT
  // THEN BIND IT TO CHILD SELECTOR
  sendAppArr = [{ name: "Biswa", tech: "CSE" }];

  recieveAppData = "";

  arrTest = [{ name: "Tushar", tech: "ETC" }];
  recieveTestArr(det: { name: string; tech: string }) {
    this.arrTest.push({
      name: det.name,
      tech: det.tech
    });
  }

  infoData = "";
  sendName(data) {
    this.infoData = data.value;
  }
}
