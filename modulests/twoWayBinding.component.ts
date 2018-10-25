import { Component } from '@angular/core';

@Component({
    selector:"two-way",
    template:`<input type='text' class="rounderBorder" [(ngModel)]="fname" />&nbsp;
              <input type='text' [(ngModel)]="lname" class="rounderBorder"/>&nbsp;
              <span>Name is {{fname}} {{lname}}</span>`,
    styles:[`
    .roundedBorder{
        border-radius:5px;
        border:2em;
        border-color:blue;
    }`]

})
export class TwoWayBinding{
    public fname;
    public lname;
}