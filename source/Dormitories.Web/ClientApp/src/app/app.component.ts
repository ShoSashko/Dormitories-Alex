import { Component } from "@angular/core";
import { OpenIdConnectService } from "./shared/open-id-connect.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private openIdConnectService: OpenIdConnectService) {
    console.log(this.openIdConnectService);
  }
  title = "app";
}
