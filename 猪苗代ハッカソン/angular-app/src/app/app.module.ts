import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { AccountComponent } from './account/account.component';
import { SearchShelterComponent } from './search-shelter/search-shelter.component';
import { HttpClientModule } from '@angular/common/http';
import { ManualComponent } from './manual/manual.component';
import { DisasterComponent } from './manual/disaster/disaster/disaster.component';
import { EarthquakeComponent } from './manual/earthquake/earthquake/earthquake.component';
import { FirstAidComponent } from './manual/firstAid/first-aid/first-aid.component';
import { MapComponent } from './manual/map/map.component';
import { ItemComponent } from './manual/item/item.component';
import { TyphoonComponent } from './manual/typhoon/typhoon.component';
import { EluptionComponent } from './manual/eluption/eluption.component';
import { FollowersComponent } from './followers/followers.component';
import { MatCardModule } from '@angular/material/card';
import { UesrComponent } from './uesr/uesr.component';
import { SukagawaComponent } from './sukagawa/sukagawa.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SidebarComponent,
    AccountComponent,
    SearchShelterComponent,
    ManualComponent,
    DisasterComponent,
    EarthquakeComponent,
    FirstAidComponent,
    MapComponent,
    ItemComponent,
    TyphoonComponent,
    EluptionComponent,
    FollowersComponent,
    UesrComponent,
    SukagawaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
