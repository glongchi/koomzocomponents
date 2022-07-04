import { NgModule } from '@angular/core';

import { defineCustomElements} from '@koomzocomponents/loader';
import { MyComponent } from './stencil-generated/proxies';

defineCustomElements(window)

@NgModule({
  declarations: [MyComponent],
  exports: [MyComponent],
  imports: []
})
export class KoomzoComponentsModule { }
