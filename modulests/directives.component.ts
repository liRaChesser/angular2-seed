import{ Component } from '@angular/core'

@Component({
    selector:'directive-ex',
    template:`<ul>
    <li *ngFor="let val of objArray">
    {{val}}</li>
    </ul>
    <input type="radio" name="color" value="blue" (click)=showNextColor(blue) #blue checked=true>Blue
    <input type="radio" name="color" value="yellow" (click)=showNextColor(yellow) #yellow>Yellow
    <div [ngSwitch]=color>
    <p *ngSwitchCase="'blue'" style='color:blue'> I am blue</p>
    <p *ngSwitchCase="'yellow'" style='color:yellow'> I am yellow</p>
    <p *ngSwitchDefault>I am default black</p>
    </div>
    <div *ngIf="color=='yellow'">Yellow Yellow dirty fellow</div>`
    
})
export class DirectivesClass{
    public objArray=[2,3,4,5,6];
    public color='blue';
    showNextColor(obj){
        console.log("Showig next color");
        obj.checked=true;
        this.color=obj.value;
    }
}