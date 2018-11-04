import { Component, OnInit } from '@angular/core';
import {AngularTutorial} from './angularTutorial.component';
import {FirstStyles} from './firstStyles.component';
import {InterPolPropBinding} from './interPolPropBinding.component';
import { ClassStyleBinding } from './classStyleBinding.component';
import { EventHandler } from './eventHandler.componet';
import { TwoWayBinding } from './twoWayBinding.component';
import { DirectivesClass } from './directives.component'
import { InputOutputComponent } from './inputOutput.component'
import { PipeOperator } from './pipe.component'
import { TDForms } from './tdform.component'
import { MDForms } from './mdforms.component';
import { EmpService } from './emp.service';
import { EmpHttpService } from './empHttp.service';


@Component({
  selector: 'my-app',
  template: `<h1>Angular2 Application</h1>
            <angular-tutorial></angular-tutorial>
            <input type="radio" value="basic" name="radioObj" #basicObj [checked]="checkMe(basicObj)" (click)="toggleView(basicObj.value)">Basic Tutorial
            <input type="radio" value="tdf" #tdfObj name="radioObj" [checked]="checkMe(tdfObj)" (click)="toggleView(tdfObj.value)">Template Driven Forms
            <input type="radio" value="mdf" #mdfObj name="radioObj" [checked]="checkMe(mdfObj)" (click)="toggleView(mdfObj.value)">Model Driven Forms
            <input type="radio" value="serWithInj" #serObj name="radioObj" [checked]="checkMe(serObj)" (click)="toggleView(serObj.value)">Services with Injection
            <input type="radio" value="serWithInjHttp" #serHttpObj name="radioObj" [checked]="checkMe(serHttpObj)" (click)="toggleView(serHttpObj.value)">Services with Http
            <br>
            <br>
            <div *ngIf="showBasicTutorial=='basic'">
            <br><style-eg></style-eg>
            <br><intProp-eg></intProp-eg>
            <br><clsStyle-bind></clsStyle-bind>
            <event-handler></event-handler>
            <br><two-way></two-way><br>
            <directive-ex></directive-ex>
            Data to child <input type="text" #pText (keyup)="0">
            <div> Data from child {{childData}} </div>
            <child [parentData]="pText.value" (evnt)="childData=$event "></child>
            <pipe-operator></pipe-operator>
            </div>
            <div *ngIf="showBasicTutorial=='tdf'">
            <tdf-form></tdf-form>
            </div>
            <div *ngIf="showBasicTutorial=='mdf'">
            <mdf-form></mdf-form>
            </div>
            <div *ngIf="showBasicTutorial=='serWithInj'">
              Employees list below
              <ul>
                <li *ngFor="let employee of employees">{{employee.id}}</li>
              </ul>
            </div>
            <div *ngIf="showBasicTutorial=='serWithInjHttp'">
            Employees list below
            <ul>
              <li *ngFor="let employee of employeesHttp">{{employee.id}}</li>
            </ul>
          </div>
            `,
  directives:[AngularTutorial,FirstStyles,InterPolPropBinding,ClassStyleBinding
    ,TwoWayBinding,EventHandler,DirectivesClass,InputOutputComponent,PipeOperator,TDForms,
  MDForms],
  providers:[EmpService,EmpHttpService],
  styles:[`h1{
    text-align:center;
  }`]
})
export class AppComponent implements OnInit {
  childData:string;
  showBasicTutorial:string="tdf";
  public employees=[];
  public employeesHttp:any=[];
  constructor(private empService:EmpService,private _empHttpService:EmpHttpService){}
  toggleView(value){
    this.showBasicTutorial=value;
  }
  checkMe(obj){
    if(obj.value === this.showBasicTutorial){
      obj.checked=true;
    }
  }
  ngOnInit(){
    this.employees = this.empService.getEmployees();
    this._empHttpService.getEmployees().subscribe((empRes)=>this.employeesHttp = empRes,(error)=>{
      this.employeesHttp=[];
      console.log("Error from main component-"+error);
    });
  }
 }
