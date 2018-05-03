import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BookService } from './services/book-service/book.service';
import { RentalService } from './services/rentalService/rental.service';
import { UserService } from './services/user-service/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    RentalService,
    BookService,
    UserService
  ],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
