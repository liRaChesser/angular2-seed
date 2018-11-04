import { OnInit, Injectable } from '@angular/core'

@Injectable()
export class EmpService {
    public employees=[];
    
    constructor(){
        this.employees=[
            {fname:"Test1",lname:"TestL1",id:1},
            {fname:"Test2",lname:"TestL2",id:2},
            {fname:"Test3",lname:"TestL3",id:3},
            {fname:"Test4",lname:"TestL4",id:4},
            {fname:"Test5",lname:"TestL5",id:5},
            {fname:"Test6",lname:"TestL6",id:6}
        ]
    }
    getEmployees(){
        return this.employees;
    }
    getEmpDetail(id){
        for(let emp of this.employees){
            if(emp['id'] === id){
                return emp;
            }
        }
    }
}