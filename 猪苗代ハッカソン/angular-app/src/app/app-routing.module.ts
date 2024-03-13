import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchShelterComponent } from './search-shelter/search-shelter.component';
import { AccountComponent } from './account/account.component';
import { TopComponent } from './top/top.component';
import { ManualComponent } from './manual/manual.component';
import { DisasterComponent } from './manual/disaster/disaster/disaster.component';
import { EarthquakeComponent } from './manual/earthquake/earthquake/earthquake.component';
import { FirstAidComponent } from './manual/firstAid/first-aid/first-aid.component';
import { MapComponent } from './manual/map/map.component';
import { EluptionComponent } from './manual/eluption/eluption.component';
import { TyphoonComponent } from './manual/typhoon/typhoon.component';
import { ItemComponent } from './manual/item/item.component';
import { FollowersComponent } from './followers/followers.component';
import { UesrComponent } from './uesr/uesr.component';
import { SukagawaComponent } from './sukagawa/sukagawa.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'searchShelter', component: SearchShelterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'disaster', component: DisasterComponent },
  { path: 'earthquake', component: EarthquakeComponent },
  { path: 'firstAid', component: FirstAidComponent },
  { path: 'map', component: MapComponent },
  { path: 'eluption', component: EluptionComponent },
  { path: 'typhoon', component: TyphoonComponent },
  { path: 'item', component: ItemComponent },
  { path: 'followers', component: FollowersComponent },
  { path: 'user', component: UesrComponent },
  { path: 'sukagawa', component: SukagawaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
