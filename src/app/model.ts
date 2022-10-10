import { InputModel } from './input-model';
export class Model{
    private name: string;
    private age:number;
    public item:Array<InputModel>

    constructor(nm:string,ag:number){
        this.name=nm
        this.age=ag
        this.item=[new InputModel("inp1"),new InputModel("inp2")]
    }
    
    insertItem(addItem:string){
        this.item.push(new InputModel(addItem))
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}