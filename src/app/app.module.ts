import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { LoaderDirective } from './directives/loader.directive';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LoaderDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ChildComponent,
    LoaderComponent
  ]
})
export class AppModule { }
