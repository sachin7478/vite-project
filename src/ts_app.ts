


/* ====================================================
            LEARNING TYPESCRIPT AND SYNTA
 ====================================================== */

let a: number = 10;
let arrNumber:number[] = [1,2,3]
let arrString:string[] = ["aa","bb","cc"];

// tuple type : should match type of each element w.r.t indexes
    let arrUnite: [string,number, number, string] = ["aa",25,8,"bb"];
// union type : can be union of different types
    let someVal:string|number  = 'Good thing' // union type - has number or string

// Type Alias : can be used as global type
    type varType = string | number | undefined; // alias type
    let aa: varType = "Someval"
    let bb: varType = 10
    let cc: varType = undefined;

//=== object with type interface ====
    interface IUser {
        name: string,
        age: number,
        getAge: () => number // function returns number
    }

    let user:IUser = { // user interface
        name: 'Sachin',
        age: 24,
        getAge: function () {return this.age}
    }
//=== End - object with type interface ====


// Object with type any
    let user2: any = { // has no type
        name: 'sachin'
    }


// ================= Writing function with TS ================
    function calc(x:number=20, y?:number):number { // function with number param can return only number
            // y '?' is optional  paramater
        return x;
    }
// Function return void or nothing
    function calcc(): void {
        console.log('do something')
    }
// literal type : the type become value
// 'id' value can be either '123' or 'Abc123'
// 'a' can be of type number or string
    function getSome(a:number | string, id:123 | "Abc123") : string {
        return `${a} _ ${id} `
    }
// ================= end - Writing function with TS ================


// === Classes with typescript ==========

    class Vehicle {
        name:string = 'Two wheeler';
        constructor(name:string) {
            this.name = name;
        }
        getName() : string {
            return this.name;
        }
        getSomething() : void { // function return void or nothing
            console.log('bla bla..')
        }
    }
    let shine = new Vehicle('New two wheeler');
    console.table(shine.getName())

/* Constructor Short hand initilization
- no need of initial defining before constuctors
- no need of assigning values inside constructor just use public keyword in params
*/
    class User {
        // name:string = ''
        // id:number = 0
        constructor(public name:string, public id: number){
            // this.name = name
            // this.id = id
        }

        displayVal = () => {
            console.log(this.name , this.id);
        }
    }
    let u1 = new User("Sachin", 1224);
    u1.displayVal();

// === End - Classes with typescript =====



// === Enum =============================
    enum Days{mon = "mon", tue="tue",wed="wed"}
    enum Nums{a = 10, b,c,d} // considers follwing values b =11,c=12...
    let whichDay:Days; 
    whichDay = Days.mon; // this variable accepts only one val from above enum
    console.log(whichDay)
// === End Enum =========================

// ======= never Type ==================
// every function if not return someting, alwary return undefined and its type is bydefault void
// If any error in the function then you can make function type never
    function someError(msg:string,errorCode:number) : never {
        throw {msg, errorCode}
    }
// console.log(someError('O O O', 520))
// ======end never type==============


// ==== unkonwn type======================
    let data: unknown;
    data = 20;
    data = "hello"
    let item:string;
    // uncomment=> item = data; // unknown is not assignable to type string
                                // it is not sure abut the type of data
    if(typeof data === 'string') {
        item = data; // here, unkown is sure that it has string value
    }
//  ==== end unkonwn type======================
