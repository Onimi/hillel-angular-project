import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { PageComponent } from './components/page/page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageHeaderComponent,
    PageContentComponent,
    PageFooterComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
