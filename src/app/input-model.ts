export class InputModel{
    private name: string;
    private check:boolean;

    constructor(nm:string){
        this.name=nm
        this.check = true
    }
    changeCheck(){
        if(this.check==true){
            this.check=false
        }
        else{
            this.check=true
        }
    }
    getName(){
        return this.name
    }
    getCheck(){
        return this.check
    }
}