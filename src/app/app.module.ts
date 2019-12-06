import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomationDetailsComponent } from './automation-details/automation-details.component';
import { AutomationFlowPageComponent } from './automation-details/automation-flow-page/automation-flow-page.component';
import { FlowComponent } from './automation-details/automation-flow-page/flow/flow.component';
import { SvgLinesComponent } from './automation-details/automation-flow-page/flow/flow-components/svg-lines/svg-lines.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomationDetailsComponent,
    AutomationFlowPageComponent,
    FlowComponent,
    SvgLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
