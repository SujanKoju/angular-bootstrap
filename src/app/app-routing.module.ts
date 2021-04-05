import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StadiumsComponent} from "./stadiums/stadiums.component";
import {VideosComponent} from "./videos/videos.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'stadiums', component: StadiumsComponent},
  {path: 'videos', component: VideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
