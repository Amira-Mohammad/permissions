import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentComponent } from './components/content/content.component';
import { ContentAdminComponent } from './components/content-admin/content-admin.component';
import { ContentOfficeComponent } from './components/content-office/content-office.component';
import { SideBarAdminComponent } from './components/side-bar-admin/side-bar-admin.component';
import { SidebarOfficeComponent } from './components/sidebar-office/sidebar-office.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ContentComponent,
    ContentAdminComponent,
    ContentOfficeComponent,
    SideBarAdminComponent,
    SidebarOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
