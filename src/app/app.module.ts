import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**import { LoginComponent } from './login/login.component';**/
//import { ToasterComponent } from './shared/toaster/toaster.component';
//import { ToasterContainerComponent } from './shared/toaster/toaster-container.component';

@NgModule({
  declarations: [
    AppComponent,
    //ToasterComponent,
   // ToasterContainerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    // ToasterComponent,
    // ToasterContainerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
