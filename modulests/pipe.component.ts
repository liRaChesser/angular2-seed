import { Component } from '@angular/core'

@Component({
    selector:'pipe-operator',
    template:`<div> This value {{ fname }} was changed to {{fname|uppercase}} using pipe operator</div>`
})
export class PipeOperator{
 public fname:string="uppercase";
}