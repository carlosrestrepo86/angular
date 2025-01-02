import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ObservableComponent } from './observable/observable/observable.component';
import { AuthService } from './app.service';
import { PromesaComponent } from './promesa/promesa.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';

// Para Store
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/counter.reducer';
import { MyCounterComponent } from './store/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    ObservableComponent,
    PromesaComponent,
    EventEmitterComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
