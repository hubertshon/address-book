import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './components/list-page/list-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [

  {
    path: 'home-page',
    component: HomePageComponent,
    data: { title: 'Home Page'},
    children: [
      {
        path: 'list-page',
        component: ListPageComponent,
        data: { title: 'List Page'},
      },
      {
        path: 'detail-page',
        component: DetailPageComponent,
        data: { title: 'Detail Page'}
      },
    ]
  },


  { path: '**', redirectTo: 'home-page/list-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
