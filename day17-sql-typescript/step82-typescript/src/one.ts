let message:string = "";

/*
*/

// let heroes:Array<string> = ['Superman', 'Batman', Joker];
// let heroes:string[] = ['Hulk','Captain Marvel'];

// Functional advantages in typescript

/* class Hero{
    title:string;
    constructor(ntitle:string){
        this.title = ntitle;
    };

    sayTitle(){
        console.log(this.title);
    }
}; */
/* 
class Hero{
    public title:string;
    constructor(ntitle:string){
        this.title = ntitle;
    };

    sayTitle(){
        console.log(this.title);
    }
}; */

interface IHero{
    title:string;
    fname:string;
    lname:string;
    city:string;
    sayTitle():void;
    sayFullName():void;
    sayCity():string;
}

class Hero implements IHero{
    city: string = "default city";
    constructor(
        public title:string, 
        public fname:string, 
        public lname:string){};

    sayTitle(){
        console.log(this.title);
    }
    sayFullName(){
        console.log(this.fname+" "+this.lname);
    }
    sayCity(){
        return "City is "+this.city;
    }
};

let hero = new Hero("Batman","Bruce","Wayne");

hero.sayTitle();
hero.sayFullName();

function saymessage(part1:string, part2:string, part3?:string){
    return part1+" "+part2;
};
function logmessage(part1:string, part2:string, part3?:string):void{
    console.log(part1+" "+part2);
};

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".log").innerHTML = saymessage("Hello ","World");
    logmessage("Hello ","World")
})