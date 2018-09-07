import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
