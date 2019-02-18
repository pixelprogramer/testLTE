import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ModuleWithProviders} from "@angular/core";
import {PrincipalComponent} from "./components/principal/principal.component";
import {DashBoardComponent} from "./components/dash-board/dash-board.component";

const appRouter: Routes = [
  {path: "", component: PrincipalComponent},
  {path: "dashboard", component: DashBoardComponent},
  {path: "**", component: PrincipalComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);
