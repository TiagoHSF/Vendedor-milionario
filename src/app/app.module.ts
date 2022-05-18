import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstStepComponent } from './first-step/first-step.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BeneficiosComponent } from './tabs/beneficios/beneficios.component';
import { SobreComponent } from './tabs/sobre/sobre.component';
import { MatButtonModule } from '@angular/material/button';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    BeneficiosComponent,
    SobreComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
