import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoopbackComponent,KeyUpComponent_v2,KeyUpComponent_v3,KeyUpComponent_v4}   from './app.component3';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ LoopbackComponent,KeyUpComponent_v2,KeyUpComponent_v3,KeyUpComponent_v4],
  bootstrap:    [ LoopbackComponent,KeyUpComponent_v2,KeyUpComponent_v3,KeyUpComponent_v4 ]
})
export class AppModule { }
