import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchWeatherComponent } from './search-weather';

@NgModule({
  declarations: [
    SearchWeatherComponent,
  ],
  imports: [
    IonicPageModule.forChild(SearchWeatherComponent),
  ],
  exports: [
    SearchWeatherComponent
  ]
})
export class SearchWeatherComponentModule {}
