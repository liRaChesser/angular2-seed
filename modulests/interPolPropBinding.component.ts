import {Component} from '@angular/core';

@Component({
    selector:'intProp-eg',
    template:`<div>{{dataBinding}}</div>
              <p style="font-size:bold">Image from a server using property databinding[]</p>
              <br><img [src]="imgUrl" [alt]="imgUrlAlt"/>`,
    styles:[`div{
        color:purple;
    }`]
})
export class InterPolPropBinding{
    public dataBinding="My First Property Data binding using Interpolation";
    public imgUrl="http://lorempixel.com/400/200";
    public imgUrlAlt="I am a image"
}