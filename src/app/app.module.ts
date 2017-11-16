import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopListComponent } from './homepage/top-list/top-list.component';
import { TopListItemComponent } from './homepage/top-list/top-list-item/top-list-item.component';
import { TopicComponent } from './homepage/topic/topic.component';
import { HotReleasesComponent } from './homepage/hot-releases/hot-releases.component';
import { HotReleasesItemComponent } from './homepage/hot-releases/hot-releases-item/hot-releases-item.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { MangaComponent } from './manga/manga.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: ':manga', component: MangaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    TopListComponent,
    TopListItemComponent,
    TopicComponent,
    HotReleasesComponent,
    HotReleasesItemComponent,
    MangaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
