import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [LoaderComponent, WelcomeMsgComponent, EmailDirective, SlicePipe, ElapsedTimePipe,],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, WelcomeMsgComponent, EmailDirective, SlicePipe, ElapsedTimePipe],
})
export class SharedModule {}
