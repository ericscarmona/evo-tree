import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EVO_TREE_ROUTES } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', children: EVO_TREE_ROUTES }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
