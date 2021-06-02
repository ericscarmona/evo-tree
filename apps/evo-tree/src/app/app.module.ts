import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EVO_TREE_ROUTES } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SpeciesEffects } from '@evo-tree/species-data-access';
import { SpeciesService } from 'libs/species-data-access/src/lib/services';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', children: EVO_TREE_ROUTES }]),
    StoreModule.forRoot(
      {
        router: routerReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([SpeciesEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [SpeciesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
