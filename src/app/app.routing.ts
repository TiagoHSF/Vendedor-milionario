import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FirstStepComponent } from "./first-step/first-step.component";
import { VideoComponent } from "./video/video.component";

const app_routes: Routes = [
  { path: "", component: VideoComponent },
  { path: "curso", component: FirstStepComponent },
];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(app_routes);
