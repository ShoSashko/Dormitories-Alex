import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { StudentListComponent } from "./students/students-list/student-list.component";
import { VerticalComponent } from "./vertical-menu/vertical-menu.component";
import { RoomListComponent } from "./rooms/rooms-list/room-list.component";
import { DormitoryListComponent } from "./dormitories/dormitory-list.component";
import { DeleteButtonComponent } from "./user-actions/delete-button.component";
import { DormitoryEditComponent } from "./dormitories/dormitory-edit.component";
import { SigninOidcComponent } from "./signin-oidc/signin-oidc.component";
import { OpenIdConnectService } from "./shared/open-id-connect.service";
import { RequireAuthenticatedUserRouteGuardService } from "./shared/require-authenticated-user-route-guard.service";
import { AddAuthorizationHeaderInterceptor } from "./shared/add-authorization-header-interceptor";
import { StudentProfileComponentComponent } from "./profile/student-profile-component/student-profile-component.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    StudentListComponent,
    VerticalComponent,
    RoomListComponent,
    DormitoryListComponent,
    DeleteButtonComponent,
    DormitoryEditComponent,
    SigninOidcComponent,
    StudentProfileComponentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent,
        pathMatch: "full",
        canActivate: [RequireAuthenticatedUserRouteGuardService],
      },
      {
        path: "student-list",
        component: StudentListComponent,
        canActivate: [RequireAuthenticatedUserRouteGuardService],
      },
      {
        path: "room-list",
        component: RoomListComponent,
        canActivate: [RequireAuthenticatedUserRouteGuardService],
      },
      {
        path: "dormitory-list",
        component: DormitoryListComponent,
        canActivate: [RequireAuthenticatedUserRouteGuardService],
      },
      {
        path: "dormitory/:id/edit",
        component: DormitoryEditComponent,
        canActivate: [RequireAuthenticatedUserRouteGuardService],
      },
      {
        path: "profile",
        component: StudentProfileComponentComponent,
        canActivate: [RequireAuthenticatedUserRouteGuardService],
      },
      {
        path: "signin-oidc",
        component: SigninOidcComponent,
      },
    ]),
  ],
  providers: [
    OpenIdConnectService,
    RequireAuthenticatedUserRouteGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthorizationHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
