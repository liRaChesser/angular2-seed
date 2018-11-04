import { OnInit, Injectable } from '@angular/core'
import { Http,Response } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from 'rxjs/Observable';
import "rxjs/observable/throw"

@Injectable()
export class EmpHttpService {
    public employees=[];
    public url:string="./app/jsonFiles/employee.json";
    constructor(private _httpSerivce:Http){
        
    }
    getEmployees(){
        return this._httpSerivce.get(this.url).map((response:Response) => response.json()).catch(this._errorHandler);
    }
    _errorHandler(error:Response){
        console.log(error);
        return Observable.throw(error|| "Page Not Found")
    }
}