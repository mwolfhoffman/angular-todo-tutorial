import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { CompletedComponent } from './completed/completed.component';
import { IncompleteComponent } from './incomplete/incomplete.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    CompletedComponent,
    IncompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
