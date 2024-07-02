import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './shared/components/basic/basic.component';
import { BasicCssDirective } from './shared/directive/basicCss.directive';
import { AdvanceCssDirective } from './shared/directive/advance-css.directive';
import { ToLowerCaseDirective } from './shared/directive/to-lower-case.directive';
import { CreditCardComponent } from './shared/components/credit-card/credit-card.component';
import { CreditCardDirective } from './shared/directive/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BasicCssDirective,
    AdvanceCssDirective,
    ToLowerCaseDirective,
    CreditCardComponent,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
