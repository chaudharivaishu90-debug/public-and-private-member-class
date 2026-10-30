const cl=console.log;
// example
// class is Blueprint
class Car{  
    //class feilds(property)
    color:string;
    type:string;
    constructor(colorName:string, type:string){
        this.color=colorName;
        this.type=type // this word represent parant class(car)
        
    }

}

let car1=new Car("Red","ev") // new key word represnt constructure function
cl(car1);

let car2=new Car("Red","ev") // new key word represnt constructure function
cl(car2);


// example
// let finance={dname:"fiannce",did:"123",describe:()=>{}}
class Department{
    dname:string;
    did:string;
    describe:()=>string;//this is not function this function type property

    constructor(dname:string,did:string){//constructor is method
        this.dname=dname;
        this.did=did
        this.describe=function(){
            return `This is Department ${this.dname} with id ${this.did}`
        }
    }


}
let finance1= new Department("finance","123")
cl(finance1)

let finance2= new Department("finance","123")
cl(finance2.describe());