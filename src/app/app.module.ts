import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FirstStepComponent } from "./first-step/first-step.component";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { BeneficiosComponent } from "./tabs/beneficios/beneficios.component";
import { SobreComponent } from "./tabs/sobre/sobre.component";
import { MatButtonModule } from "@angular/material/button";
import { VideoComponent } from "./video/video.component";
import { routing } from "./app.routing";
import { ContatoComponent } from "./tabs/contato/contato.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    BeneficiosComponent,
    SobreComponent,
    VideoComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
