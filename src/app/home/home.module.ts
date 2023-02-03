import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { DetailMarvelComponent } from './components/detail-marvel/detail-marvel.component';
import { TemplateComponentComponent } from './components/template/template-component/template-component.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, IconComponent, DetailMarvelComponent, TemplateComponentComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, MatIconModule],
  providers: [],
  entryComponents: [],
})
export class HomeModule {}
