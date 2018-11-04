import { Component } from '@angular/core';

@Component({
    selector:`clsStyle-bind`,
    template:`<div class="myClass3" [class.myClass]="bindSingleClass">Single Sylte Class Binding</div>
              <div style="font-size:20px" [style.color]="isBlue?'blue':'brown'">Single Style Property Binding</div>
              <div class="myClass3" [ngClass]="loadMultipleClasses()">Multiple Style Class Binding</div>
              <div style="color:brown" [ngStyle]="loadMultipleStyles()">Multiple Style Property Binding</div>
              `,
    styles:[`
    .myClass{
        color:red;
    }
    .myClass1{
        text-align:center;
    }
    .myClass3{
        font-size:20px;
    }
    `]
})
export class ClassStyleBinding{
    public bindSingleClass=true;
    loadMultipleClasses(){
        let classes={
            myClass:true,
            myClass1:true
        };
        return classes;
    }
    loadMultipleStyles(){
        let sytles={
            'font-size':'20px',
            'text-align':'center'
        }
        return sytles;
    }
}