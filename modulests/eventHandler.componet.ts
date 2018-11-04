import { Component } from '@angular/core';

@Component({
    selector:'event-handler',
    template:`<button (click)="resetMe()">Reset</button>&nbsp;<button (click)=iAmClicked()>Click</button>
              <span>The button is clicked {{count}} times</span>
              <br><input type="text" (focus)="disableMe(radioRef)" value="Edit me if you can"  #radioRef>
              `
})
export class EventHandler{
    public count=0;
    iAmClicked(){
        return ++this.count;
    };
    resetMe(){
        this.count=0;
    };
    disableMe(obj){
        obj.disabled=true;
        //console.log("disabled");
    };
    enableMe(obj){
        //alert("Inside enabled");
        obj.disabled="";
    }
}