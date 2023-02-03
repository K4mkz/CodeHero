import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMarvelComponent } from './components/detail-marvel/detail-marvel.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponentComponent } from './components/template/template-component/template-component.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponentComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: ':id', component: DetailMarvelComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
