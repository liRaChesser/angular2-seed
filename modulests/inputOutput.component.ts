import { Component, EventEmitter } from '@angular/core'

@Component({
    selector:'child',
    template:`<div>Data from parent component {{parentData}}</div>
    <div>
    Input to parent data <input type="text" (keyup)="emitThis(childToParent)" #childToParent>
    </div>`,
    inputs:['parentData'],
    outputs:['evnt']
})
export class InputOutputComponent{
    public parentData:string;
    public evnt = new EventEmitter();
    emitThis(obj){
        this.evnt.emit(obj.value);
    }
}