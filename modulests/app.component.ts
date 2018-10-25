import { Component } from '@angular/core';
import {AngularTutorial} from './angularTutorial.component';
import {FirstStyles} from './firstStyles.component';
import {InterPolPropBinding} from './interPolPropBinding.component';
import { ClassStyleBinding } from './classStyleBinding.component';
import { EventHandler } from './eventHandler.componet';
import { TwoWayBinding } from './twoWayBinding.component';

@Component({
  selector: 'my-app',
  template: `<h1>Angular2 Application</h1>
            <angular-tutorial></angular-tutorial>
            <br><style-eg></style-eg>
            <br><intProp-eg></intProp-eg>
            <br><clsStyle-bind></clsStyle-bind>
            <event-handler></event-handler>
            <br><two-way></two-way>`,
  directives:[AngularTutorial,FirstStyles,
              InterPolPropBinding,ClassStyleBinding,
              EventHandler,TwoWayBinding],
  styles:[`h1{
    text-align:center;
  }`]
})
export class AppComponent { }
