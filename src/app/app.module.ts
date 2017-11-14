import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopListComponent } from './homepage/top-list/top-list.component';
import { TopListItemComponent } from './homepage/top-list/top-list-item/top-list-item.component';
import { TopicComponent } from './homepage/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    TopListComponent,
    TopListItemComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
